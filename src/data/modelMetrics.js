export const modelMetrics = [
  {
    id: "resnet50",
    name: "ResNet50",
    roleKey: "research:models.resnetRole",
    descKey: "research:models.resnetDesc",
    statusKey: "research:models.trainingPhase",
    role: { vi: "Mô hình Cơ sở chính", en: "Primary Baseline Model" },
    description: { vi: "Mạng tích chập 50 lớp với kết nối tắt residual, tối ưu cho đặc trưng phân loại chi tiết.", en: "50-layer deep convolutional network with residual connections for fine-grained feature extraction." },
    status: { vi: "Giai đoạn đánh giá đồ án", en: "Evaluation Phase" },
    accuracy: "91.4%",
    precision: "90.8%",
    recall: "91.2%",
    f1Score: "91.0%",
    top5Accuracy: "97.5%",
    modelSize: "~98 MB",
    inferenceTime: "~18 ms"
  },
  {
    id: "efficientnet-b0",
    name: "EfficientNet-B0",
    roleKey: "research:models.efficientnetRole",
    descKey: "research:models.efficientnetDesc",
    statusKey: "research:models.trainingPhase",
    role: { vi: "Ứng viên cân bằng", en: "Balanced Benchmark" },
    description: { vi: "Kiến trúc tỉ lệ kép tối ưu hóa đồng thời chiều rộng, chiều sâu và độ phân giải hình ảnh.", en: "Compound scaling architecture balancing width, depth, and resolution efficiency." },
    status: { vi: "Giai đoạn đánh giá đồ án", en: "Evaluation Phase" },
    accuracy: "89.6%",
    precision: "89.1%",
    recall: "89.5%",
    f1Score: "89.3%",
    top5Accuracy: "96.2%",
    modelSize: "~21 MB",
    inferenceTime: "~14 ms"
  },
  {
    id: "mobilenet-v3",
    name: "MobileNetV3",
    roleKey: "research:models.mobilenetRole",
    descKey: "research:models.mobilenetDesc",
    statusKey: "research:models.trainingPhase",
    role: { vi: "Mô hình nhẹ di động", en: "Lightweight Mobile Model" },
    description: { vi: "Kiến trúc tối ưu hóa độ trễ thấp cho thiết bị di động và trình duyệt web.", en: "Hardware-aware architecture optimized for ultra-fast web and edge device inference." },
    status: { vi: "Giai đoạn đánh giá đồ án", en: "Evaluation Phase" },
    accuracy: "86.8%",
    precision: "86.2%",
    recall: "86.5%",
    f1Score: "86.3%",
    top5Accuracy: "94.8%",
    modelSize: "~16 MB",
    inferenceTime: "~8 ms"
  }
];

export const datasetSummary = {
  name: "Stanford Dogs Dataset",
  imagesCount: "20,580",
  classesCount: 120,
  task: "Fine-Grained Image Classification",
  splits: [
    { label: { vi: "Tập huấn luyện (80%)", en: "Train Split (80%)" }, labelKey: "research:dataset.trainSplit", percentage: "16,464 ảnh (80%)" },
    { label: { vi: "Tập kiểm định (10%)", en: "Validation Split (10%)" }, labelKey: "research:dataset.valSplit", percentage: "2,058 ảnh (10%)" },
    { label: { vi: "Tập kiểm thử (10%)", en: "Test Split (10%)" }, labelKey: "research:dataset.testSplit", percentage: "2,058 ảnh (10%)" }
  ]
};
