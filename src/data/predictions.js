export const defaultMockResult = {
  id: "pred-demo-001",
  breed: "Golden Retriever",
  slug: "golden-retriever",
  confidence: 96.82,
  inferenceTimeMs: 84,
  model: "EfficientNet-B0",
  createdAt: "2026-09-10T14:30:00Z",
  topPredictions: [
    { breed: "Golden Retriever", confidence: 96.82, slug: "golden-retriever" },
    { breed: "Labrador Retriever", confidence: 1.87, slug: "labrador-retriever" },
    { breed: "Flat-Coated Retriever", confidence: 0.71, slug: "flat-coated-retriever" },
    { breed: "Nova Scotia Duck Tolling Retriever", confidence: 0.38, slug: "golden-retriever" },
    { breed: "Irish Setter", confidence: 0.22, slug: "irish-setter" }
  ],
  insight: "DogBreedID detected visual characteristics commonly associated with Golden Retrievers, such as facial structure, ear fold, and coat coloration.",
  isDemo: true
};
