import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { UploadCloud, Image as ImageIcon, AlertCircle } from 'lucide-react';

export const UploadDropzone = ({ onImageSelect }) => {
  const { t } = useTranslation(['identify', 'errors']);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const fileInputRef = useRef(null);

  const validateAndProcessFile = (file) => {
    setErrorMsg(null);
    if (!file) return;

    // Check type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      setErrorMsg(t('errors:unsupportedType'));
      return;
    }

    // Check size (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setErrorMsg(t('errors:sizeLimitExceeded'));
      return;
    }

    onImageSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 ${
          isDragging
            ? 'border-blue-600 bg-blue-50/80 scale-[1.01] shadow-lg shadow-blue-500/10'
            : 'border-slate-300 hover:border-blue-400 bg-white hover:bg-slate-50/50 shadow-xs'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
              isDragging ? 'bg-blue-600 text-white scale-110' : 'bg-blue-50 text-blue-600'
            }`}
          >
            <UploadCloud className="w-8 h-8" />
          </div>

          <div>
            <p className="text-lg font-bold text-slate-900">
              {isDragging ? t('dropzone.dragTitle') : t('dropzone.title')}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              {t('dropzone.subtitlePrefix')} <span className="text-blue-600 font-semibold underline">{t('dropzone.browseFiles')}</span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 bg-slate-100 px-4 py-2 rounded-xl">
            <span className="flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5" /> {t('dropzone.formats')}
            </span>
            <span>•</span>
            <span>{t('dropzone.maxSize')}</span>
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2.5 animate-in fade-in">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Upload Privacy & Scope Notices */}
      <div className="mt-4 flex flex-col gap-2 text-xs text-slate-500">
        <p className="flex items-center gap-1.5 font-medium text-slate-600 bg-slate-100/80 px-3.5 py-2 rounded-xl border border-slate-200/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span>{t('dropzone.privacyNotice')}</span>
        </p>
        <p className="flex items-center gap-1.5 font-medium text-slate-500 px-3.5 py-1">
          <span>•</span>
          <span>{t('dropzone.supportedScope')}</span>
        </p>
      </div>
    </div>
  );
};
