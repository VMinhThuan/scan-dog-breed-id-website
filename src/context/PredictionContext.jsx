import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { mockPredictionService } from '../services/mockPredictionService';
import { defaultMockResult } from '../data/predictions';

const PredictionContext = createContext();

export const PredictionProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [predictionResult, setPredictionResult] = useState(defaultMockResult);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStepIndex, setProcessingStepIndex] = useState(0);
  const [predictionHistory, setPredictionHistory] = useState([]);
  
  const currentUrlRef = useRef(null);

  // Load persistent history on mount
  useEffect(() => {
    const history = mockPredictionService.getHistory();
    setPredictionHistory(history);
  }, []);

  // Cleanup object URLs to avoid memory leaks
  const cleanCurrentUrl = useCallback(() => {
    if (currentUrlRef.current && currentUrlRef.current.startsWith('blob:')) {
      URL.revokeObjectURL(currentUrlRef.current);
      currentUrlRef.current = null;
    }
  }, []);

  const selectImage = useCallback((file) => {
    cleanCurrentUrl();
    if (!file) {
      setSelectedImage(null);
      setSelectedImageUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    currentUrlRef.current = objectUrl;
    setSelectedImage(file);
    setSelectedImageUrl(objectUrl);
  }, [cleanCurrentUrl]);

  const removeImage = useCallback(() => {
    cleanCurrentUrl();
    setSelectedImage(null);
    setSelectedImageUrl(null);
  }, [cleanCurrentUrl]);

  const runMockPrediction = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setProcessingStepIndex(0);

    // Simulated status sequence steps (400-500ms per step)
    const stepInterval = setInterval(() => {
      setProcessingStepIndex((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(stepInterval);
        return prev;
      });
    }, 450);

    try {
      const result = await mockPredictionService.analyzeImage(selectedImage);
      
      // Preserve uploaded image URL for current result display
      const resultWithImage = {
        ...result,
        imageUrl: selectedImageUrl || defaultMockResult.imageUrl || "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000"
      };

      setPredictionResult(resultWithImage);

      // Save item to persistent local history
      const updatedHistory = mockPredictionService.saveToHistory(resultWithImage);
      setPredictionHistory(updatedHistory);

      return resultWithImage;
    } finally {
      clearInterval(stepInterval);
      setIsProcessing(false);
    }
  };

  const resetPrediction = useCallback(() => {
    cleanCurrentUrl();
    setSelectedImage(null);
    setSelectedImageUrl(null);
    setPredictionResult(null);
  }, [cleanCurrentUrl]);

  const deleteHistoryItem = useCallback((id) => {
    const updated = mockPredictionService.deleteHistoryItem(id);
    setPredictionHistory(updated);
  }, []);

  useEffect(() => {
    return () => {
      cleanCurrentUrl();
    };
  }, [cleanCurrentUrl]);

  return (
    <PredictionContext.Provider
      value={{
        selectedImage,
        selectedImageUrl,
        predictionResult,
        isProcessing,
        processingStepIndex,
        predictionHistory,
        selectImage,
        removeImage,
        runMockPrediction,
        resetPrediction,
        deleteHistoryItem,
        setPredictionResult
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
};

export const usePrediction = () => {
  const context = useContext(PredictionContext);
  if (!context) {
    throw new Error('usePrediction must be used within PredictionProvider');
  }
  return context;
};
