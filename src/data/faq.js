export const faqCategories = [
  "all",
  "using",
  "aiModel",
  "predictions",
  "privacy",
  "research"
];

export const faqItems = [
  {
    id: 1,
    category: "using",
    question: {
      en: "What is DogBreedID?",
      vi: "DogBreedID là gì?"
    },
    answer: {
      en: "DogBreedID is an AI-powered dog breed identification web application built as part of a Computer Science graduation thesis on fine-grained image classification using Convolutional Neural Networks (CNN).",
      vi: "DogBreedID là ứng dụng web nhận diện giống chó bằng AI được xây dựng trong khuôn khổ khóa luận tốt nghiệp Khoa học Máy tính về phân loại hình ảnh chi tiết sử dụng Mạng nơ-ron tích chập (CNN)."
    }
  },
  {
    id: 2,
    category: "using",
    question: {
      en: "How do I identify a dog breed?",
      vi: "Làm thế nào để nhận diện một giống chó?"
    },
    answer: {
      en: "Navigate to the Identify page, drag & drop or choose a clear photo of a single dog, and click 'Identify Breed'. The system simulates CNN feature extraction and returns the top predicted breeds.",
      vi: "Truy cập trang Nhận diện, kéo thả hoặc chọn ảnh chụp rõ nét của một chú chó và nhấp vào 'Nhận diện giống chó'. Hệ thống mô phỏng trích xuất đặc trưng CNN và trả về các giống chó được dự đoán hàng đầu."
    }
  },
  {
    id: 3,
    category: "using",
    question: {
      en: "How many dog breeds are supported?",
      vi: "Có bao nhiêu giống chó được hỗ trợ?"
    },
    answer: {
      en: "DogBreedID is designed for 120 supported dog breed classes derived from the Stanford Dogs Dataset.",
      vi: "DogBreedID được thiết kế cho 120 lớp giống chó được hỗ trợ từ bộ dữ liệu Stanford Dogs Dataset."
    }
  },
  {
    id: 4,
    category: "predictions",
    question: {
      en: "Does DogBreedID recognize mixed-breed dogs?",
      vi: "DogBreedID có nhận diện được chó lai không?"
    },
    answer: {
      en: "Current research scope focuses strictly on single-label fine-grained classification among supported purebred classes. Multi-label or exact mixed-breed percentage calculation is not supported.",
      vi: "Phạm vi nghiên cứu hiện tại tập trung vào phân loại đơn nhãn chi tiết giữa các giống chó thuần chủng được hỗ trợ. Chưa hỗ trợ phân loại đa nhãn hoặc tính tỷ lệ phần trăm chó lai."
    }
  },
  {
    id: 5,
    category: "predictions",
    question: {
      en: "Is the AI prediction guaranteed to be 100% correct?",
      vi: "Dự đoán của AI có đảm bảo chính xác 100% không?"
    },
    answer: {
      en: "No. AI predictions are probabilistic estimations calculated from visual patterns (ears, coat, head shape). Results should be interpreted as estimates, not definitive veterinary certification.",
      vi: "Không. Dự đoán AI là các ước tính xác suất được tính toán từ các đặc trưng hình ảnh (tai, lông, hình dáng đầu). Kết quả mang tính chất tham khảo, không phải chứng nhận thú y chính thức."
    }
  },
  {
    id: 6,
    category: "using",
    question: {
      en: "What type of image should I upload for best results?",
      vi: "Tôi nên tải lên loại ảnh nào để có kết quả tốt nhất?"
    },
    answer: {
      en: "Upload a clear, well-lit photo containing a single dog with visible facial features and body shape. Avoid heavy blur, dark shadows, or multiple dogs in the frame.",
      vi: "Tải lên ảnh chụp rõ nét, đủ ánh sáng của một chú chó duy nhất có khuôn mặt và vóc dáng rõ ràng. Tránh ảnh mờ nặng, bóng tối che khuất hoặc có nhiều chú chó trong cùng khung hình."
    }
  },
  {
    id: 7,
    category: "predictions",
    question: {
      en: "What is a confidence score?",
      vi: "Điểm độ tin cậy là gì?"
    },
    answer: {
      en: "The confidence score represents the normalized Softmax probability outputted by the final classification layer for a specific breed class.",
      vi: "Điểm độ tin cậy thể hiện xác suất Softmax được chuẩn hóa do lớp phân loại cuối cùng tính toán cho một lớp giống chó cụ thể."
    }
  },
  {
    id: 8,
    category: "aiModel",
    question: {
      en: "What is Grad-CAM?",
      vi: "Grad-CAM là gì?"
    },
    answer: {
      en: "Grad-CAM (Gradient-weighted Class Activation Mapping) is an interpretability technique that visualizes feature map regions in the final convolutional layer that contributed most strongly to the prediction.",
      vi: "Grad-CAM (Gradient-weighted Class Activation Mapping) là kỹ thuật trực quan hóa khả năng giải thích, giúp hiển thị các vùng đặc trưng trên lớp tích chập cuối đóng góp mạnh nhất vào kết quả dự đoán."
    }
  },
  {
    id: 9,
    category: "aiModel",
    question: {
      en: "Which CNN models are being evaluated in the thesis?",
      vi: "Các mô hình CNN nào đang được đánh giá trong khóa luận?"
    },
    answer: {
      en: "The research evaluates ResNet50 (baseline residual model), EfficientNet-B0 (compound scaling model), and MobileNetV3 (lightweight edge inference model).",
      vi: "Nghiên cứu đánh giá ResNet50 (mô hình tàn dư cơ sở), EfficientNet-B0 (mô hình tỷ lệ kết hợp) và MobileNetV3 (mô hình suy luận nhẹ cho thiết bị di động)."
    }
  },
  {
    id: 10,
    category: "aiModel",
    question: {
      en: "Why convert PyTorch models to ONNX Runtime?",
      vi: "Tại sao cần chuyển đổi mô hình PyTorch sang ONNX Runtime?"
    },
    answer: {
      en: "ONNX (Open Neural Network Exchange) enables cross-platform runtime optimization, reducing CPU/GPU inference latency when serving FastAPI web requests.",
      vi: "ONNX (Open Neural Network Exchange) cho phép tối ưu hóa thời gian thực thi đa nền tảng, giảm độ trễ suy luận CPU/GPU khi phục vụ yêu cầu web FastAPI."
    }
  },
  {
    id: 11,
    category: "privacy",
    question: {
      en: "Does DogBreedID store my uploaded images?",
      vi: "DogBreedID có lưu trữ ảnh tải lên của tôi không?"
    },
    answer: {
      en: "In this frontend prototype demo, images are processed in your browser memory via temporary object URLs (`URL.createObjectURL`) and are never sent to external servers.",
      vi: "Trong bản demo frontend này, ảnh được xử lý trong bộ nhớ trình duyệt qua URL tạm thời (`URL.createObjectURL`) và không bao giờ được tải lên máy chủ bên ngoài."
    }
  },
  {
    id: 12,
    category: "research",
    question: {
      en: "Can DogBreedID identify individual dogs or pets by name?",
      vi: "DogBreedID có thể nhận diện từng chú chó cá thể hoặc thú cưng theo tên không?"
    },
    answer: {
      en: "No. DogBreedID classifies breed categories, not individual dog biometric identity.",
      vi: "Không. DogBreedID phân loại các giống chó, không nhận diện danh tính sinh trắc học từng cá thể chó."
    }
  },
  {
    id: 13,
    category: "research",
    question: {
      en: "Are native Vietnamese dog breeds currently included?",
      vi: "Các giống chó bản địa Việt Nam có được đưa vào chưa?"
    },
    answer: {
      en: "The current baseline model utilizes classes from the Stanford Dogs Dataset. Native breeds (such as Phu Quoc Ridgeback or H'Mong Docked-tail) are reserved for future custom dataset expansion.",
      vi: "Mô hình cơ sở hiện tại sử dụng các lớp từ bộ dữ liệu Stanford Dogs. Các giống chó bản địa (như Chó Phú Quốc hay Chó H'Mông cộc đuôi) được dành cho việc mở rộng bộ dữ liệu tùy chỉnh trong tương lai."
    }
  },
  {
    id: 14,
    category: "research",
    question: {
      en: "What hardware/software stack will power the backend?",
      vi: "Hệ thống phần cứng/phần mềm nào sẽ vận hành backend?"
    },
    answer: {
      en: "The planned production architecture consists of PyTorch model weights converted to ONNX Runtime, served via FastAPI endpoints with PostgreSQL storing user logs and history.",
      vi: "Kiến trúc hoàn chỉnh dự kiến gồm trọng số PyTorch chuyển đổi sang ONNX Runtime, phục vụ qua điểm cuối FastAPI cùng PostgreSQL lưu trữ nhật ký người dùng và lịch sử."
    }
  }
];
