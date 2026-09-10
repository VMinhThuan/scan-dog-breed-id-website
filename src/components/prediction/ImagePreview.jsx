import React from 'react';
import { useTranslation } from 'react-i18next';
import { RefreshCw, Trash2, Sparkles, FileText } from 'lucide-react';
import { Button } from '../common/Button';

export const ImagePreview = ({
  file,
  imageUrl,
  onChangePhoto,
  onRemovePhoto,
  onStartAnalysis
}) => {
  const { t } = useTranslation('identify');

  const formatFileSize = (bytes) => {
    if (!bytes) return t('preview.unknownSize', 'Unknown size');
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col gap-6">
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-4/3 max-h-[380px] group flex items-center justify-center">
        <img
          src={imageUrl}
          alt={t('preview.imageAlt', 'Selected dog photo preview')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Button variant="secondary" size="sm" icon={RefreshCw} onClick={onChangePhoto}>
            {t('preview.changePhoto', 'Change Photo')}
          </Button>
          <Button variant="danger" size="sm" icon={Trash2} onClick={onRemovePhoto}>
            {t('preview.remove', 'Remove')}
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-3 truncate">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="truncate">
            <p className="text-sm font-bold text-slate-900 truncate">
              {file ? file.name : 'Sample Dog Image.jpg'}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              {file ? formatFileSize(file.size) : '1.42 MB'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onChangePhoto}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 px-2.5 py-1.5 rounded-lg hover:bg-blue-50"
          >
            {t('preview.replace', 'Replace')}
          </button>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        icon={Sparkles}
        onClick={onStartAnalysis}
      >
        {t('preview.identifyBreed', 'Identify Breed')}
      </Button>
    </div>
  );
};

