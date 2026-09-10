export const modelMetrics = [
  {
    id: "resnet50",
    name: "ResNet50",
    roleKey: "research:models.resnetRole",
    descKey: "research:models.resnetDesc",
    statusKey: "research:models.trainingPhase"
  },
  {
    id: "efficientnet-b0",
    name: "EfficientNet-B0",
    roleKey: "research:models.efficientnetRole",
    descKey: "research:models.efficientnetDesc",
    statusKey: "research:models.trainingPhase"
  },
  {
    id: "mobilenet-v3",
    name: "MobileNetV3",
    roleKey: "research:models.mobilenetRole",
    descKey: "research:models.mobilenetDesc",
    statusKey: "research:models.trainingPhase"
  }
];

export const datasetSummary = {
  name: "Stanford Dogs Dataset",
  imagesCount: "20,580",
  classesCount: 120,
  task: "Fine-Grained Image Classification",
  splits: [
    { labelKey: "research:dataset.trainSplit", percentageKey: "research:dataset.configNote" },
    { labelKey: "research:dataset.valSplit", percentageKey: "research:dataset.configNote" },
    { labelKey: "research:dataset.testSplit", percentageKey: "research:dataset.configNote" }
  ]
};
