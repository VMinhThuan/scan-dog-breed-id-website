export const pipelineSteps = [
  {
    step: "01",
    titleKey: "preprocessing.step1Title",
    descKey: "preprocessing.step1Desc",
    title: { vi: "Ảnh RGB", en: "RGB Image" },
    description: { vi: "Ảnh chụp gốc do người dùng tải lên ở định dạng JPG hoặc PNG.", en: "Raw input photo submitted by user in JPG or PNG format." }
  },
  {
    step: "02",
    titleKey: "preprocessing.step2Title",
    descKey: "preprocessing.step2Desc",
    title: { vi: "Thay đổi kích thước", en: "Resize" },
    description: { vi: "Nội suy song tuyến tính đưa ảnh về độ phân giải chuẩn 224x224.", en: "Bilinear interpolation resizes image to uniform 224x224 resolution." }
  },
  {
    step: "03",
    titleKey: "preprocessing.step3Title",
    descKey: "preprocessing.step3Desc",
    title: { vi: "Chuẩn hóa Tensor", en: "Normalize" },
    description: { vi: "Chuẩn hóa theo trung bình ImageNet [0.485, 0.456, 0.406] và độ lệch chuẩn [0.229, 0.224, 0.225].", en: "Standardized using ImageNet mean [0.485, 0.456, 0.406] and std [0.229, 0.224, 0.225]." }
  },
  {
    step: "04",
    titleKey: "preprocessing.step4Title",
    descKey: "preprocessing.step4Desc",
    title: { vi: "Trích xuất đặc trưng CNN", en: "CNN Feature Extraction" },
    description: { vi: "Các lớp tích chập trích xuất đường nét, họa tiết lông và hình dáng đặc trưng của chú chó.", en: "Deep convolutional layers extract edge gradients, fur textures, and facial contours." }
  },
  {
    step: "05",
    titleKey: "pipeline.step5Title",
    descKey: "pipeline.step5Desc",
    title: { vi: "Suy luận & Phân loại Top-5", en: "Inference & Top-5 Classification" },
    description: { vi: "Lớp Softmax tính toán phân bố xác suất và xuất ra danh sách Top-5 giống chó phù hợp nhất.", en: "The model calculates Softmax probability distribution and outputs the Top-5 candidate breeds." }
  }
];

export const techStackInfo = [
  {
    name: "CNN Architectures",
    tech: "ResNet50 / EfficientNet-B0 / MobileNetV3",
    descKey: "home:techStack.cnnDesc",
    categoryKey: "home:techStack.catAi"
  },
  {
    name: "Explainable AI",
    tech: "Grad-CAM",
    descKey: "home:techStack.gradCamDesc",
    categoryKey: "home:techStack.catInterpretability"
  },
  {
    name: "Inference Engine",
    tech: "ONNX Runtime",
    descKey: "home:techStack.onnxDesc",
    categoryKey: "home:techStack.catDeployment"
  },
  {
    name: "Web Platform",
    tech: "ReactJS + Tailwind CSS",
    descKey: "home:techStack.webDesc",
    categoryKey: "home:techStack.catInterface"
  }
];

export const thesisObjectives = [
  {
    title: {
      en: 'Evaluate CNN Backbones',
      vi: 'Đánh giá các kiến trúc CNN'
    },
    description: {
      en: 'Systematically compare fine-grained categorization performance across ResNet50, EfficientNet-B0, and MobileNetV3.',
      vi: 'So sánh hệ thống hiệu suất phân loại chi tiết giữa ResNet50, EfficientNet-B0 và MobileNetV3.'
    }
  },
  {
    title: {
      en: 'Optimize Inference Latency',
      vi: 'Tối ưu thời gian suy luận'
    },
    description: {
      en: 'Export PyTorch weights to ONNX graphs for low-latency CPU and GPU inference serving.',
      vi: 'Xuất trọng số PyTorch sang đồ thị ONNX để phục vụ suy luận CPU/GPU độ trễ thấp.'
    }
  },
  {
    title: {
      en: 'Visual Interpretability',
      vi: 'Trực quan hóa giải thích'
    },
    description: {
      en: 'Implement Grad-CAM heatmaps to visualize deep feature attention maps for prediction transparency.',
      vi: 'Tích hợp bản đồ nhiệt Grad-CAM để trực quan hóa vùng chú ý của mạng nơ-ron giúp tăng tính minh bạch.'
    }
  },
  {
    title: {
      en: 'Interactive Defense Platform',
      vi: 'Nền tảng báo cáo tương tác'
    },
    description: {
      en: 'Develop a modern single-page frontend application for live thesis demonstration and defense.',
      vi: 'Phát triển ứng dụng web trang đơn hiện đại phục vụ báo cáo và bảo vệ đồ án trực tiếp.'
    }
  }
];

