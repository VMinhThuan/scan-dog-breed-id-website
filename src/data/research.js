export const pipelineSteps = [
  {
    step: "01",
    titleKey: "ai:preprocessing.step1Title",
    descKey: "ai:preprocessing.step1Desc"
  },
  {
    step: "02",
    titleKey: "ai:preprocessing.step2Title",
    descKey: "ai:preprocessing.step2Desc"
  },
  {
    step: "03",
    titleKey: "ai:preprocessing.step3Title",
    descKey: "ai:preprocessing.step3Desc"
  },
  {
    step: "04",
    titleKey: "ai:preprocessing.step4Title",
    descKey: "ai:preprocessing.step4Desc"
  },
  {
    step: "05",
    titleKey: "ai:pipeline.step5Title",
    descKey: "ai:pipeline.step5Desc"
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

