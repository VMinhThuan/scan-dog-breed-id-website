/**
 * Mock Prediction Service
 * 
 * FUTURE BACKEND INTEGRATION PLACEHOLDERS:
 * - POST /api/predictions (Upload image & run CNN inference)
 * - GET /api/predictions/:id (Fetch prediction details)
 * - GET /api/predictions/history (Fetch authenticated user history)
 * - DELETE /api/predictions/:id (Delete history item)
 */

import { breeds } from '../data/breeds';
import { defaultMockResult } from '../data/predictions';

export const mockPredictionService = {
  /**
   * Simulates AI analysis API call
   * @param {File} imageFile 
   * @returns {Promise<Object>} prediction result object
   */
  async analyzeImage(imageFile) {
    // Simulated network delay
    await new Promise((resolve) => setTimeout(resolve, 2200));

    // Choose primary breed based on filename hint or default to Golden Retriever
    const nameLower = imageFile ? imageFile.name.toLowerCase() : '';
    let matchedBreed = breeds.find((b) => nameLower.includes(b.slug) || nameLower.includes(b.id)) || breeds[0];

    // Pick top 4 other breeds randomly or by similarity
    const otherBreeds = breeds.filter((b) => b.id !== matchedBreed.id).slice(0, 4);

    const topPredictions = [
      { breed: matchedBreed.name, confidence: 96.82, slug: matchedBreed.slug },
      { breed: otherBreeds[0]?.name || "Labrador Retriever", confidence: 1.87, slug: otherBreeds[0]?.slug || "labrador-retriever" },
      { breed: otherBreeds[1]?.name || "Flat-Coated Retriever", confidence: 0.71, slug: otherBreeds[1]?.slug || "flat-coated-retriever" },
      { breed: otherBreeds[2]?.name || "Irish Setter", confidence: 0.38, slug: otherBreeds[2]?.slug || "irish-setter" },
      { breed: otherBreeds[3]?.name || "Beagle", confidence: 0.22, slug: otherBreeds[3]?.slug || "beagle" }
    ];

    const newResult = {
      id: `pred-${Date.now()}`,
      breed: matchedBreed.name,
      slug: matchedBreed.slug,
      confidence: 96.82,
      inferenceTimeMs: Math.floor(Math.random() * 25) + 70, // 70-95ms
      model: "EfficientNet-B0",
      createdAt: new Date().toISOString(),
      topPredictions,
      insight: `DogBreedID detected visual features strongly aligned with ${matchedBreed.name}, such as facial shape, ear position, and coat coloration.`,
      isDemo: false
    };

    return newResult;
  },

  /**
   * Get persistent prediction history from localStorage
   */
  getHistory() {
    try {
      const stored = localStorage.getItem('dogbreedid_history');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading history from localStorage:', e);
    }
    // Return default initial history sample
    return [defaultMockResult];
  },

  /**
   * Save prediction item to localStorage history
   */
  saveToHistory(resultItem) {
    try {
      const currentHistory = this.getHistory();
      // Avoid duplicate IDs
      const filtered = currentHistory.filter((item) => item.id !== resultItem.id);
      const updated = [resultItem, ...filtered];
      localStorage.setItem('dogbreedid_history', JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error saving history to localStorage:', e);
      return [];
    }
  },

  /**
   * Delete item from localStorage history
   */
  deleteHistoryItem(id) {
    try {
      const currentHistory = this.getHistory();
      const updated = currentHistory.filter((item) => item.id !== id);
      localStorage.setItem('dogbreedid_history', JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error deleting history item from localStorage:', e);
      return [];
    }
  }
};
