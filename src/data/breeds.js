export const breeds = [
  {
    id: "golden-retriever",
    name: "Golden Retriever",
    slug: "golden-retriever",
    origin: {
      en: "United Kingdom (Scotland)",
      vi: "Vương quốc Anh (Scotland)"
    },
    size: "large",
    breedGroup: {
      en: "Sporting",
      vi: "Chó thể thao"
    },
    lifeExpectancy: {
      en: "10 – 12 years",
      vi: "10 – 12 năm"
    },
    weight: "25 – 34 kg",
    height: "51 – 61 cm",
    coat: {
      en: "Dense, water-repellent double coat with feathering",
      vi: "Lớp lông kép dày, kháng nước với phần lông bờm mềm mại"
    },
    temperament: {
      en: ["Friendly", "Intelligent", "Gentle", "Loyal", "Active"],
      vi: ["Thân thiện", "Thông minh", "Hiền lành", "Trung thành", "Năng động"]
    },
    description: {
      en: "The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. Known for their gentle demeanor and eagerness to please.",
      vi: "Golden Retriever là giống chó cơ bắp, chắc chắn, nổi tiếng với bộ lông vàng óng mượt mà tạo nên tên gọi của giống chó này. Được biết đến với tính cách hiền hòa và luôn muốn làm hài lòng chủ nhân."
    },
    appearance: {
      en: "Symmetrical, balanced, active, powerful, level-topped, sound mover; displaying a kindly expression with floppy ears and dark friendly eyes.",
      vi: "Thân hình cân đối, linh hoạt, mạnh mẽ với biểu cảm hiền lành, đôi tai rủ và ánh mắt tối thân thiện."
    },
    temperamentDescription: {
      en: "Extremely friendly and adaptable, Golden Retrievers thrive on human companionship and make exceptional family pets and service animals.",
      vi: "Cực kỳ thân thiện và dễ thích nghi, Golden Retriever phát triển tốt khi sống cùng con người và là thú cưng gia đình cũng như chó trợ giúp xuất sắc."
    },
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 4,
      trainability: 5,
      adaptability: 4,
      grooming: 3,
      exercise: 4
    },
    similarBreeds: ["labrador-retriever", "flat-coated-retriever", "irish-setter", "pug"]
  },
  {
    id: "labrador-retriever",
    name: "Labrador Retriever",
    slug: "labrador-retriever",
    origin: {
      en: "Canada (Newfoundland)",
      vi: "Canada (Newfoundland)"
    },
    size: "large",
    breedGroup: {
      en: "Sporting",
      vi: "Chó thể thao"
    },
    lifeExpectancy: {
      en: "11 – 13 years",
      vi: "11 – 13 năm"
    },
    weight: "25 – 36 kg",
    height: "55 – 62 cm",
    coat: {
      en: "Short, dense, weather-resistant double coat",
      vi: "Lớp lông kép ngắn, dày và chống chịu thời tiết tốt"
    },
    temperament: {
      en: ["Outgoing", "Even-Tempered", "Gentle", "Agile", "Kind"],
      vi: ["Hướng ngoại", "Điềm tĩnh", "Gentle", "Linh hoạt", "Tốt bụng"]
    },
    description: {
      en: "The Labrador Retriever is built for sport and hard work. Medium-to-large in size, with a short dense water-resistant coat and iconic otter tail.",
      vi: "Labrador Retriever được lai tạo cho các hoạt động thể thao và lao động. Kích thước trung bình đến lớn với bộ lông ngắn chống nước và chiếc đuôi kiểu hải cẩu đặc trưng."
    },
    appearance: {
      en: "Strong, compact build with a broad skull, kind eyes, and a broad chest tapering to a thick, rounded tail.",
      vi: "Vóc dáng khỏe khoắn, săn chắc với hộp sọ rộng, đôi mắt hiền từ và khuôn ngực nở thu hẹp dần về phía chiếc đuôi tròn dày."
    },
    temperamentDescription: {
      en: "Famous for their warm personality, enthusiasm, and gentle patience around children and other pets.",
      vi: "Nổi tiếng với tính cách ấm áp, nhiệt tình và sự kiên nhẫn dịu dàng đối với trẻ em cũng như các thú cưng khác."
    },
    image: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 5,
      trainability: 5,
      adaptability: 5,
      grooming: 2,
      exercise: 5
    },
    similarBreeds: ["golden-retriever", "flat-coated-retriever", "german-shepherd", "beagle"]
  },
  {
    id: "german-shepherd",
    name: "German Shepherd",
    slug: "german-shepherd",
    origin: {
      en: "Germany",
      vi: "Đức"
    },
    size: "large",
    breedGroup: {
      en: "Herding",
      vi: "Chó chăn gia súc"
    },
    lifeExpectancy: {
      en: "9 – 13 years",
      vi: "9 – 13 năm"
    },
    weight: "30 – 40 kg",
    height: "55 – 65 cm",
    coat: {
      en: "Double coat of medium length with dense undercoat",
      vi: "Bộ lông kép độ dài trung bình với lớp lông lót dày"
    },
    temperament: {
      en: ["Confident", "Courageous", "Smart", "Loyal", "Watchful"],
      vi: ["Tự tin", "Dũng cảm", "Thông minh", "Trung thành", "Cảnh giác"]
    },
    description: {
      en: "The German Shepherd is a large, agile, muscular dog of noble character and high intelligence. Renowned for police, military, and search-and-rescue work.",
      vi: "German Shepherd (Béc-giê Đức) là giống chó lớn, linh hoạt, cơ bắp với phẩm chất quý phái và trí thông minh cao. Nổi tiếng trong công tác cảnh sát, quân đội và cứu hộ."
    },
    appearance: {
      en: "Proportionate, muscular body with erect pointed ears, noble head profile, and a plush bushy tail.",
      vi: "Thân hình cơ bắp cân đối với đôi tai dựng đứng, đường nét đầu uy nghi và chiếc đuôi xù rậm rạp."
    },
    temperamentDescription: {
      en: "Devoted and protective toward family members while reserved with strangers until trust is established.",
      vi: "Hết lòng tận tụy và bảo vệ gia đình nhưng giữ thái độ cẩn trọng với người lạ cho đến khi thiết lập được sự tin tưởng."
    },
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 3,
      energy: 5,
      trainability: 5,
      adaptability: 4,
      grooming: 3,
      exercise: 5
    },
    similarBreeds: ["border-collie", "siberian-husky", "labrador-retriever", "shiba-inu"]
  },
  {
    id: "siberian-husky",
    name: "Siberian Husky",
    slug: "siberian-husky",
    origin: {
      en: "Russia (Siberia)",
      vi: "Nga (Siberia)"
    },
    size: "medium",
    breedGroup: {
      en: "Working",
      vi: "Chó làm việc"
    },
    lifeExpectancy: {
      en: "12 – 14 years",
      vi: "12 – 14 năm"
    },
    weight: "16 – 27 kg",
    height: "50 – 60 cm",
    coat: {
      en: "Thick double coat with soft dense undercoat",
      vi: "Lớp lông kép dày với lớp lông lót mềm mại rậm rạp"
    },
    temperament: {
      en: ["Friendly", "Outgoing", "Alert", "Gentle", "Mischievous"],
      vi: ["Thân thiện", "Hướng ngoại", "Tỉnh táo", "Hiền lành", "Tinh nghịch"]
    },
    description: {
      en: "The Siberian Husky is a medium-sized working sled dog, quick and light on their feet and graceful in motion. Known for captivating blue or heterochromatic eyes.",
      vi: "Siberian Husky là giống chó kéo xe làm việc cỡ trung, nhanh nhẹn, thanh thoát trong cử động. Nổi tiếng với đôi mắt màu xanh lam hoặc hai màu cuốn hút."
    },
    appearance: {
      en: "Well-furred body, erect triangular ears, almond eyes, and a sickle-shaped feathered tail carried over the back.",
      vi: "Thân hình rậm lông, đôi tai tam giác dựng đứng, mắt hình hạnh nhân và chiếc đuôi cong hình lưỡi liềm phủ trên lưng."
    },
    temperamentDescription: {
      en: "High-energy, friendly with strangers and dogs alike, requiring regular mental and physical engagement.",
      vi: "Dồi dào năng lượng, thân thiện với người lạ và các chú chó khác, đòi hỏi được vận động thể chất và trí óc thường xuyên."
    },
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 4,
      energy: 5,
      trainability: 3,
      adaptability: 3,
      grooming: 4,
      exercise: 5
    },
    similarBreeds: ["samoyed", "german-shepherd", "shiba-inu", "border-collie"]
  },
  {
    id: "samoyed",
    name: "Samoyed",
    slug: "samoyed",
    origin: {
      en: "Russia (Siberia)",
      vi: "Nga (Siberia)"
    },
    size: "medium",
    breedGroup: {
      en: "Working",
      vi: "Chó làm việc"
    },
    lifeExpectancy: {
      en: "12 – 14 years",
      vi: "12 – 14 năm"
    },
    weight: "16 – 30 kg",
    height: "48 – 60 cm",
    coat: {
      en: "Heavy, weather-resistant white double coat",
      vi: "Lớp lông kép màu trắng dày chống chịu thời tiết khắc nghiệt"
    },
    temperament: {
      en: ["Friendly", "Gentle", "Playful", "Adaptable", "Sociable"],
      vi: ["Thân thiện", "Hiền hòa", "Ham chơi", "Dễ thích nghi", "Hòa đồng"]
    },
    description: {
      en: "Famous for the 'Samoyed smile', a bright upturned expression created by dark lips contrasting against a brilliant white coat built for arctic temperatures.",
      vi: "Nổi tiếng với 'nụ cười Samoyed' rạng rỡ tạo nên bởi đôi môi đen tương phản với bộ lông trắng muốt như tuyết được thiết kế cho khí hậu vùng cực."
    },
    appearance: {
      en: "Substantial working spitz dog with a dense glistening white coat, dark sparkling eyes, and a plume tail resting gracefully over the spine.",
      vi: "Dáng vóc vững chãi của dòng spitz với bộ lông trắng lấp lánh, đôi mắt đen long lanh và chiếc đuôi lông vũ uốn lượn trên sống lưng."
    },
    temperamentDescription: {
      en: "Heartwarming and affection-driven, Samoyeds thrive when closely integrated into household activities.",
      vi: "Ấm áp và tình cảm, Samoyed tràn đầy năng lượng khi được tham gia cùng các hoạt động của gia đình."
    },
    image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 4,
      trainability: 4,
      adaptability: 4,
      grooming: 5,
      exercise: 4
    },
    similarBreeds: ["siberian-husky", "shiba-inu", "golden-retriever", "french-bulldog"]
  },
  {
    id: "beagle",
    name: "Beagle",
    slug: "beagle",
    origin: {
      en: "United Kingdom",
      vi: "Vương quốc Anh"
    },
    size: "small",
    breedGroup: {
      en: "Hound",
      vi: "Chó săn"
    },
    lifeExpectancy: {
      en: "10 – 15 years",
      vi: "10 – 15 năm"
    },
    weight: "9 – 11 kg",
    height: "33 – 41 cm",
    coat: {
      en: "Smooth, hard, medium-length coat resistant to brush",
      vi: "Lớp lông ngắn mịn, cứng cáp chống trầy xước"
    },
    temperament: {
      en: ["Amiable", "Curious", "Determined", "Excitable", "Gentle"],
      vi: ["Dễ mến", "Tò mò", "Kiên định", "Hào hứng", "Dịu dàng"]
    },
    description: {
      en: "Small, compact, and hardy, Beagles are scent hounds guided by an extraordinary nose. Easily recognized by their long droopy ears and white-tipped tail.",
      vi: "Nhỏ nhắn, săn chắc và dẻo dai, Beagle là giống chó săn theo dấu vết sở hữu khứu giác phi thường. Dễ dàng nhận biết bởi đôi tai dài rủ và vệt chóp đuôi màu trắng."
    },
    appearance: {
      en: "Miniature hound appearance with square muzzle, large brown eyes, long ears, and a sturdy straight-backed torso.",
      vi: "Ngoại hình chó săn thu nhỏ với mõm vuông, đôi mắt nâu lớn, tai dài và thân mình lưng thẳng chắc chắn."
    },
    temperamentDescription: {
      en: "Incredibly curious and social pack animals that get along wonderfully with kids and other companion pets.",
      vi: "Cực kỳ tò mò và giàu tính xã hội, sống rất hòa đồng với trẻ em và các vật nuôi khác trong nhà."
    },
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 4,
      trainability: 3,
      adaptability: 4,
      grooming: 2,
      exercise: 4
    },
    similarBreeds: ["pug", "labrador-retriever", "shiba-inu", "border-collie"]
  },
  {
    id: "shiba-inu",
    name: "Shiba Inu",
    slug: "shiba-inu",
    origin: {
      en: "Japan",
      vi: "Nhật Bản"
    },
    size: "small",
    breedGroup: {
      en: "Non-Sporting",
      vi: "Chó cảnh / Phi thể thao"
    },
    lifeExpectancy: {
      en: "12 – 16 years",
      vi: "12 – 16 năm"
    },
    weight: "8 – 11 kg",
    height: "35 – 43 cm",
    coat: {
      en: "Stiff straight outer coat with soft dense undercoat",
      vi: "Lớp lông ngoài thô thẳng với lớp lông lót mềm dày"
    },
    temperament: {
      en: ["Alert", "Confident", "Keen", "Independent", "Loyal"],
      vi: ["Cảnh giác", "Tự tin", "Sắc sảo", "Độc lập", "Trung thành"]
    },
    description: {
      en: "The ancient Japanese spitz breed features fox-like facial features, prick ears, and a curled tail. Renowned for clean habits and spirited individuality.",
      vi: "Giống chó spitz cổ xưa của Nhật Bản có khuôn mặt giống cáo, đôi tai dựng và chiếc đuôi cuộn tròn. Nổi tiếng với thói quen sạch sẽ và cá tính độc lập mạnh mẽ."
    },
    appearance: {
      en: "Compact, well-muscled body with a fox-like head, almond eyes, triangular standing ears, and tightly curled tail.",
      vi: "Thân hình nhỏ gọn, cơ bắp với chiếc đầu hình mặt cáo, đôi mắt hạnh nhân, tai đứng tam giác và chiếc đuôi cuộn chặt."
    },
    temperamentDescription: {
      en: "Independent, feline-like cleanliness, intensely loyal to their owners but dignified and composed around strangers.",
      vi: "Tính cách độc lập, thích làm sạch như mèo, cực kỳ trung thành với chủ nhân nhưng điềm tĩnh và giữ khoảng cách với người lạ."
    },
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 3,
      energy: 4,
      trainability: 3,
      adaptability: 4,
      grooming: 3,
      exercise: 3
    },
    similarBreeds: ["siberian-husky", "samoyed", "pug", "beagle"]
  },
  {
    id: "border-collie",
    name: "Border Collie",
    slug: "border-collie",
    origin: {
      en: "United Kingdom (Anglo-Scottish border)",
      vi: "Vương quốc Anh (Vùng biên giới Anh-Scotland)"
    },
    size: "medium",
    breedGroup: {
      en: "Herding",
      vi: "Chó chăn gia súc"
    },
    lifeExpectancy: {
      en: "12 – 15 years",
      vi: "12 – 15 năm"
    },
    weight: "14 – 20 kg",
    height: "46 – 56 cm",
    coat: {
      en: "Double coat available in rough (feathered) or smooth",
      vi: "Lớp lông kép có dạng lông xù mềm hoặc lông mượt"
    },
    temperament: {
      en: ["Tenacious", "Keen", "Energetic", "Intelligent", "Responsive"],
      vi: ["Bền bỉ", "Sắc sảo", "Năng động", "Thông minh", "Nhanh nhạy"]
    },
    description: {
      en: "Widely considered the world's most intelligent dog breed, the Border Collie is an athletic, work-driven herder with intense focus and agility.",
      vi: "Được coi là giống chó thông minh nhất thế giới, Border Collie là chú chó chăn cừu vô cùng nhanh nhẹn, đầy tinh thần làm việc và độ tập trung cao độ."
    },
    appearance: {
      en: "Athletic, well-proportioned body built for stamina and swift turns, featuring an expressive gaze known as 'the eye'.",
      vi: "Thân hình thể thao cân đối được thiết kế cho sức bền và những cú ngoặt nhanh, nổi tiếng với ánh mắt điều khiển cừu sắc lẹm."
    },
    temperamentDescription: {
      en: "Thrives on complex training, mental stimulation, and outdoor agility activities.",
      vi: "Phát triển rực rỡ khi được huấn luyện bài tập phức tạp, kích thích trí óc và các hoạt động thể thao ngoài trời."
    },
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 4,
      energy: 5,
      trainability: 5,
      adaptability: 4,
      grooming: 3,
      exercise: 5
    },
    similarBreeds: ["german-shepherd", "australian-shepherd", "siberian-husky", "golden-retriever"]
  },
  {
    id: "pug",
    name: "Pug",
    slug: "pug",
    origin: {
      en: "China",
      vi: "Trung Quốc"
    },
    size: "small",
    breedGroup: {
      en: "Toy",
      vi: "Chó cảnh nhỏ (Toy)"
    },
    lifeExpectancy: {
      en: "13 – 15 years",
      vi: "13 – 15 năm"
    },
    weight: "6 – 8 kg",
    height: "25 – 33 cm",
    coat: {
      en: "Short, smooth, glossy fine coat",
      vi: "Lớp lông ngắn, mịn màng và bóng mượt"
    },
    temperament: {
      en: ["Charming", "Mischievous", "Loving", "Docile", "Quiet"],
      vi: ["Duyên dáng", "Tinh nghịch", "Giàu tình cảm", "Ngoan ngoãn", "Yên lặng"]
    },
    description: {
      en: "The Pug's comical facial wrinkles, large sparkling eyes, and curled tail make them beloved worldwide companions born to charm.",
      vi: "Những nếp nhăn ngộ nghĩnh trên khuôn mặt, đôi mắt tròn to lấp lánh và chiếc đuôi cuộn giúp Pug trở thành người bạn đồng hành quyến rũ được yêu thích trên toàn thế giới."
    },
    appearance: {
      en: "Square, cobby body with deep wrinkles on a short flat muzzle, velvet button ears, and a tightly curled tail over the hip.",
      vi: "Thân hình vuông vắn, tròn trịa với nếp nhăn sâu trên mõm ngắn, tai mềm như nhung và đuôi xoắn trên hông."
    },
    temperamentDescription: {
      en: "Extremely affectionate lap dogs that love human warmth and entertaining family members.",
      vi: "Là giống chó quấn chủ cực kỳ tình cảm, thích hơi ấm con người và luôn mang lại tiếng cười cho gia đình."
    },
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 2,
      trainability: 3,
      adaptability: 5,
      grooming: 2,
      exercise: 2
    },
    similarBreeds: ["french-bulldog", "beagle", "shiba-inu", "golden-retriever"]
  },
  {
    id: "french-bulldog",
    name: "French Bulldog",
    slug: "french-bulldog",
    origin: {
      en: "France / United Kingdom",
      vi: "Pháp / Vương quốc Anh"
    },
    size: "small",
    breedGroup: {
      en: "Non-Sporting",
      vi: "Chó cảnh / Phi thể thao"
    },
    lifeExpectancy: {
      en: "10 – 12 years",
      vi: "10 – 12 năm"
    },
    weight: "8 – 13 kg",
    height: "28 – 33 cm",
    coat: {
      en: "Short, smooth, shiny coat with soft skin",
      vi: "Lớp lông ngắn mịn bóng loáng cùng làn da mềm mại"
    },
    temperament: {
      en: ["Playful", "Adaptable", "Smart", "Affectionate", "Quiet"],
      vi: ["Ham chơi", "Thích nghi tốt", "Thông minh", "Tình cảm", "Điềm tĩnh"]
    },
    description: {
      en: "Instantly recognizable by their trademark bat ears and broad flat muzzle, French Bulldogs are compact, lovable urban companions.",
      vi: "Dễ dàng nhận biết bởi đôi tai dơi đặc trưng và chiếc mõm ngắn phẳng rộng, Gâu Pháp (French Bulldog) là người bạn nhỏ nhắn đáng yêu trong các căn hộ hiện đại."
    },
    appearance: {
      en: "Muscular heavy-boned body with wide shoulders, square head, distinctive erect bat ears, and short smooth coat.",
      vi: "Thân hình cơ bắp khung xương chắc khỏe, vai rộng, đầu vuông, tai dơi dựng đứng độc đáo."
    },
    temperamentDescription: {
      en: "Quiet and adaptable, Frenchies bond deeply with owners and fit comfortably into apartment living.",
      vi: "Yên tĩnh và dễ thích nghi, chó Gâu Pháp gắn kết sâu sắc với chủ nhân và phù hợp hoàn hảo với cuộc sống căn hộ."
    },
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 3,
      trainability: 4,
      adaptability: 5,
      grooming: 2,
      exercise: 2
    },
    similarBreeds: ["pug", "beagle", "shiba-inu", "samoyed"]
  },
  {
    id: "poodle",
    name: "Standard Poodle",
    slug: "poodle",
    origin: {
      en: "Germany / France",
      vi: "Đức / Pháp"
    },
    size: "large",
    breedGroup: {
      en: "Non-Sporting",
      vi: "Chó cảnh / Phi thể thao"
    },
    lifeExpectancy: {
      en: "12 – 15 years",
      vi: "12 – 15 năm"
    },
    weight: "20 – 32 kg",
    height: "45 – 60 cm",
    coat: {
      en: "Dense, naturally harsh, curly non-shedding coat",
      vi: "Bộ lông xoăn dày tự nhiên, không gây dị ứng và ít rụng"
    },
    temperament: {
      en: ["Proud", "Active", "Very Intelligent", "Instinctive", "Trainable"],
      vi: ["Kiêu hãnh", "Năng động", "Rất thông minh", "Bản năng tốt", "Dễ huấn luyện"]
    },
    description: {
      en: "Behind the elegant grooming lies an exceptionally smart, versatile, and athletic water retriever with a hypoallergenic curly coat.",
      vi: "Ẩn sau vẻ ngoài được cắt tỉa thanh lịch là giống chó thu hồi đồ dưới nước cực kỳ thông minh, linh hoạt và nhanh nhẹn với bộ lông xoăn hypoallergenic."
    },
    appearance: {
      en: "Squarely built, elegant head with dark oval eyes, long hanging ears, and light springy stride.",
      vi: "Vóc dáng vuông vắn, chiếc đầu thanh tú với đôi mắt hình bầu dục tối màu, tai dài rủ và bước đi nhẹ nhàng thanh thoát."
    },
    temperamentDescription: {
      en: "Highly attentive, proud yet playful, mastering commands and trick training with extraordinary speed.",
      vi: "Rất tập trung, kiêu hãnh nhưng hóm hỉnh, tiếp thu các câu lệnh và trò diễn với tốc độ phi thường."
    },
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 4,
      energy: 4,
      trainability: 5,
      adaptability: 4,
      grooming: 5,
      exercise: 4
    },
    similarBreeds: ["golden-retriever", "border-collie", "labrador-retriever", "basset-hound"]
  },
  {
    id: "boxer",
    name: "Boxer",
    slug: "boxer",
    origin: {
      en: "Germany",
      vi: "Đức"
    },
    size: "large",
    breedGroup: {
      en: "Working",
      vi: "Chó làm việc"
    },
    lifeExpectancy: {
      en: "10 – 12 years",
      vi: "10 – 12 năm"
    },
    weight: "25 – 32 kg",
    height: "53 – 63 cm",
    coat: {
      en: "Short, tight, shiny, smooth coat",
      vi: "Lớp lông ngắn, ôm sát, bóng mượt"
    },
    temperament: {
      en: ["Devoted", "Fearless", "Friendly", "Energetic", "Playful"],
      vi: ["Tận tụy", "Bản lĩnh", "Thân thiện", "Năng động", "Ham chơi"]
    },
    description: {
      en: "The Boxer is a square-built, medium-to-large dog with short back, strong limbs, and a short tight-fitting coat featuring expressive dark eyes.",
      vi: "Boxer là giống chó khung vuông cỡ lớn với tấm lưng ngắn, tứ chi chắc khỏe và đôi mắt sẫm màu giàu biểu cảm."
    },
    appearance: {
      en: "Muscular torso with blunt square jawline, expressive dark brown eyes, and smooth fawn or brindle coat.",
      vi: "Thân hình cơ bắp với quai hàm vuông vắn, đôi mắt nâu sẫm sinh động và bộ lông màu vàng hoặc vằn vện."
    },
    temperamentDescription: {
      en: "Famous for their high-spirited playfulness, affectionate loyalty to children, and protective instinct.",
      vi: "Nổi tiếng với tinh thần ham chơi, sự trung thành dịu dàng đối với trẻ em và bản năng bảo vệ mạnh mẽ."
    },
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 4,
      energy: 5,
      trainability: 4,
      adaptability: 4,
      grooming: 2,
      exercise: 5
    },
    similarBreeds: ["german-shepherd", "rottweiler", "french-bulldog", "doberman-pinscher"]
  },
  {
    id: "rottweiler",
    name: "Rottweiler",
    slug: "rottweiler",
    origin: {
      en: "Germany",
      vi: "Đức"
    },
    size: "large",
    breedGroup: {
      en: "Working",
      vi: "Chó làm việc"
    },
    lifeExpectancy: {
      en: "9 – 10 years",
      vi: "9 – 10 năm"
    },
    weight: "35 – 60 kg",
    height: "56 – 69 cm",
    coat: {
      en: "Medium-length outer coat with undercoat, black with rust markings",
      vi: "Lớp lông ngoài dài trung bình màu đen điểm vệt nâu gỉ sắt"
    },
    temperament: {
      en: ["Loyal", "Loving", "Confident", "Protective", "Calm"],
      vi: ["Trung thành", "Tình cảm", "Tự tin", "Bảo vệ", "Bình tĩnh"]
    },
    description: {
      en: "A robust working breed of great strength descended from Roman drover dogs, possessing a black coat with clearly defined rich tan markings.",
      vi: "Giống chó làm việc mạnh mẽ có nguồn gốc từ chó lùa gia súc La Mã cổ đại, sở hữu bộ lông đen với các vệt màu gỉ sắt rõ nét."
    },
    appearance: {
      en: "Massive head, broad chest, muscular frame with distinct mahogany cheek and chest markings.",
      vi: "Đầu lớn, ngực rộng, khung thân cơ bắp lực lưỡng với các vệt màu xám gỉ rõ nét trên má và ngực."
    },
    temperamentDescription: {
      en: "Self-assured, calm, courageous, and deeply protective of family members when properly socialized.",
      vi: "Tự tin, điềm tĩnh, dũng cảm và bảo vệ sâu sắc các thành viên gia đình khi được huấn luyện đúng cách."
    },
    image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 3,
      energy: 4,
      trainability: 4,
      adaptability: 3,
      grooming: 2,
      exercise: 4
    },
    similarBreeds: ["german-shepherd", "boxer", "doberman-pinscher", "labrador-retriever"]
  },
  {
    id: "doberman-pinscher",
    name: "Doberman Pinscher",
    slug: "doberman-pinscher",
    origin: {
      en: "Germany",
      vi: "Đức"
    },
    size: "large",
    breedGroup: {
      en: "Working",
      vi: "Chó làm việc"
    },
    lifeExpectancy: {
      en: "10 – 12 years",
      vi: "10 – 12 năm"
    },
    weight: "32 – 45 kg",
    height: "61 – 72 cm",
    coat: {
      en: "Smooth, short, hard, thick flat coat",
      vi: "Bộ lông ngắn, mượt, phẳng chắc"
    },
    temperament: {
      en: ["Alert", "Fearless", "Loyal", "Obedient", "Energetic"],
      vi: ["Cảnh giác", "Bản lĩnh", "Trung thành", "Vâng lời", "Năng động"]
    },
    description: {
      en: "Sleek, powerful, and elegant, the Doberman Pinscher is built for speed, agility, and vigilant guardianship.",
      vi: "Thanh thoát, mạnh mẽ và kiêu sa, Doberman Pinscher được lai tạo cho tốc độ, độ linh hoạt và khả năng canh gác cẩn trọng."
    },
    appearance: {
      en: "Compact, muscular body with long wedge-shaped head, dark intelligent eyes, and graceful energetic stride.",
      vi: "Thân hình săn chắc cơ bắp, đầu hình nêm dài, đôi mắt tối thông minh và sải bước uyển chuyển dứt khoát."
    },
    temperamentDescription: {
      en: "Intensely loyal and trainable companion that forms deep lifelong bonds with family.",
      vi: "Người bạn đồng hành cực kỳ trung thành và dễ huấn luyện, tạo dựng mối gắn kết bền chặt suốt đời."
    },
    image: "https://images.unsplash.com/photo-1605897472359-85e4b94d685d?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 3,
      energy: 5,
      trainability: 5,
      adaptability: 4,
      grooming: 2,
      exercise: 5
    },
    similarBreeds: ["rottweiler", "german-shepherd", "boxer", "great-dane"]
  },
  {
    id: "great-dane",
    name: "Great Dane",
    slug: "great-dane",
    origin: {
      en: "Germany",
      vi: "Đức"
    },
    size: "large",
    breedGroup: {
      en: "Working",
      vi: "Chó làm việc"
    },
    lifeExpectancy: {
      en: "7 – 10 years",
      vi: "7 – 10 năm"
    },
    weight: "50 – 90 kg",
    height: "71 – 86 cm",
    coat: {
      en: "Short, thick, smooth, glossy coat",
      vi: "Bộ lông ngắn dày bóng mượt"
    },
    temperament: {
      en: ["Friendly", "Patient", "Gentle", "Loving", "Devoted"],
      vi: ["Thân thiện", "Kiên nhẫn", "Hiền lành", "Tình cảm", "Tận tụy"]
    },
    description: {
      en: "Known as the 'Apollo of Dogs', the Great Dane combines imposing stature with a gentle, patient heart.",
      vi: "Được mệnh danh là 'Thần Apollo của các giống chó', Great Dane kết hợp vóc dáng khổng lồ uy nghi với trái tim hiền hòa kiên nhẫn."
    },
    appearance: {
      en: "Towering muscular build with narrow rectangular skull, deep chest, and long graceful gait.",
      vi: "Vóc dáng sừng sững cơ bắp với hộp sọ hình chữ nhật, lồng ngực sâu và bước đi quý phái."
    },
    temperamentDescription: {
      en: "Remarkably gentle with children, calm inside the home, and eager to sit on laps despite giant size.",
      vi: "Đặc biệt dịu dàng với trẻ em, bình tĩnh trong nhà và luôn muốn nũng nịu dù vóc dáng khổng lồ."
    },
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 3,
      trainability: 4,
      adaptability: 3,
      grooming: 2,
      exercise: 3
    },
    similarBreeds: ["doberman-pinscher", "boxer", "saint-bernard", "golden-retriever"]
  },
  {
    id: "corgi",
    name: "Pembroke Welsh Corgi",
    slug: "corgi",
    origin: {
      en: "United Kingdom (Wales)",
      vi: "Vương quốc Anh (Xứ Wales)"
    },
    size: "small",
    breedGroup: {
      en: "Herding",
      vi: "Chó chăn gia súc"
    },
    lifeExpectancy: {
      en: "12 – 15 years",
      vi: "12 – 15 năm"
    },
    weight: "10 – 14 kg",
    height: "25 – 30 cm",
    coat: {
      en: "Medium-length double coat with dense undercoat",
      vi: "Lớp lông kép độ dài trung bình với lớp lông lót dày"
    },
    temperament: {
      en: ["Affectionate", "Tenacious", "Friendly", "Bold", "Playful"],
      vi: ["Tình cảm", "Bền bỉ", "Thân thiện", "Táo bạo", "Ham chơi"]
    },
    description: {
      en: "Low-set, strong, and sturdily built herder famous for fox-like head contours, short legs, and playful royal charisma.",
      vi: "Chú chó chăn cừu chân ngắn, chắc chắn nổi tiếng với khuôn mặt hình cáo, đôi chân ngắn ngộ nghĩnh và sức hút hoàng gia đáng yêu."
    },
    appearance: {
      en: "Low profile with heavy bone, fox-like head, erect ears, short sturdy legs, and expressive foxy face.",
      vi: "Dáng thấp chân ngắn, xương to chắc, đầu mặt cáo, tai dựng và nét mặt lém lỉnh."
    },
    temperamentDescription: {
      en: "Bold, intelligent, and highly affectionate, always ready for family play or herding games.",
      vi: "Tự tin, thông minh và cực kỳ tình cảm, luôn sẵn sàng vui chơi cùng gia đình."
    },
    image: "https://images.unsplash.com/photo-1612536057832-2ff7ead7819c?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 4,
      trainability: 4,
      adaptability: 4,
      grooming: 3,
      exercise: 4
    },
    similarBreeds: ["shiba-inu", "beagle", "border-collie", "pug"]
  },
  {
    id: "australian-shepherd",
    name: "Australian Shepherd",
    slug: "australian-shepherd",
    origin: {
      en: "United States",
      vi: "Mỹ"
    },
    size: "medium",
    breedGroup: {
      en: "Herding",
      vi: "Chó chăn gia súc"
    },
    lifeExpectancy: {
      en: "12 – 15 years",
      vi: "12 – 15 năm"
    },
    weight: "18 – 29 kg",
    height: "46 – 58 cm",
    coat: {
      en: "Medium-texture double coat, straight to wavy",
      vi: "Bộ lông kép dày mượt, từ thẳng đến lượn sóng"
    },
    temperament: {
      en: ["Smart", "Work-Oriented", "Exuberant", "Loyal", "Protective"],
      vi: ["Thông minh", "Hăng hái làm việc", "Rạng rỡ", "Trung thành", "Bảo vệ"]
    },
    description: {
      en: "The Aussie is an intelligent, highly versatile working dog with striking merle coats and remarkable herding instincts.",
      vi: "Australian Shepherd (Aussie) là giống chó làm việc đa năng thông minh với bộ lông màu cẩm thạch độc đáo và bản năng chăn cừu vượt trội."
    },
    appearance: {
      en: "Medium-sized, well-balanced body with feathering on legs, expressive almond eyes (blue, brown, or split), and naturally bobbed tail.",
      vi: "Kích thước trung bình cân đối, lông phủ trên chân, đôi mắt hạnh nhân sinh động (xanh, nâu hoặc hai màu)."
    },
    temperamentDescription: {
      en: "Energetic and focused, requiring active tasks and vigorous daily outdoors exercise.",
      vi: "Năng động và tập trung cao độ, đòi hỏi các nhiệm vụ rèn luyện và bài tập thể lực ngoài trời."
    },
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 4,
      energy: 5,
      trainability: 5,
      adaptability: 4,
      grooming: 3,
      exercise: 5
    },
    similarBreeds: ["border-collie", "german-shepherd", "siberian-husky", "golden-retriever"]
  },
  {
    id: "dachshund",
    name: "Dachshund",
    slug: "dachshund",
    origin: {
      en: "Germany",
      vi: "Đức"
    },
    size: "small",
    breedGroup: {
      en: "Hound",
      vi: "Chó săn"
    },
    lifeExpectancy: {
      en: "12 – 16 years",
      vi: "12 – 16 năm"
    },
    weight: "7 – 15 kg",
    height: "20 – 23 cm",
    coat: {
      en: "Short smooth coat (also wirehaired or longhaired)",
      vi: "Bộ lông ngắn mượt (hoặc lông thô, lông dài)"
    },
    temperament: {
      en: ["Clever", "Stubborn", "Devoted", "Lively", "Courageous"],
      vi: ["Lanh lợi", "Bướng bỉnh", "Tận tụy", "Sống động", "Dũng cảm"]
    },
    description: {
      en: "Iconic 'sausage dog' with long low body, short legs, and bold inquisitive temperament originally bred to hunt badgers.",
      vi: "Giống chó 'lạp xưởng' biểu tượng với thân mình dài, chân ngắn và tính cách hiếu kỳ dũng cảm nguyên bản được lai tạo để săn bới."
    },
    appearance: {
      en: "Elongated torso with short muscular legs, long head, droopy ears, and bold confident posture.",
      vi: "Lưng dài ngoẵng với đôi chân ngắn cơ bắp, đầu dài, tai rủ và dáng đứng tự tin."
    },
    temperamentDescription: {
      en: "Lively and clever to the point of stubbornness, deeply attached to their primary owner.",
      vi: "Linh hoạt và thông minh đôi khi bướng bỉnh, gắn bó sâu sắc với chủ nhân."
    },
    image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 4,
      energy: 3,
      trainability: 3,
      adaptability: 4,
      grooming: 2,
      exercise: 3
    },
    similarBreeds: ["beagle", "pug", "corgi", "basset-hound"]
  },
  {
    id: "basset-hound",
    name: "Basset Hound",
    slug: "basset-hound",
    origin: {
      en: "France / United Kingdom",
      vi: "Pháp / Vương quốc Anh"
    },
    size: "medium",
    breedGroup: {
      en: "Hound",
      vi: "Chó săn"
    },
    lifeExpectancy: {
      en: "12 – 13 years",
      vi: "12 – 13 năm"
    },
    weight: "20 – 29 kg",
    height: "30 – 38 cm",
    coat: {
      en: "Short, smooth, hard, dense coat",
      vi: "Bộ lông ngắn, mịn, thô chắc"
    },
    temperament: {
      en: ["Tenacious", "Affectionate", "Gentle", "Devoted", "Sweet-Tempered"],
      vi: ["Kiên trì", "Tình cảm", "Hiền hòa", "Tận tụy", "Ngọt ngào"]
    },
    description: {
      en: "Instantly recognizable for long velvet ears, soulful mournful eyes, heavy bone structure, and incredible scent tracking skills.",
      vi: "Dễ dàng nhận biết với đôi tai dài như nhung, ánh mắt u buồn truyền cảm, khung xương nặng và kỹ năng theo dấu vết tuyệt vời."
    },
    appearance: {
      en: "Short-legged heavy body with loose skin, low skull, long hanging ears, and curved tail.",
      vi: "Thân hình chân ngắn nặng nề với làn da chùng, tai rủ dài và chiếc đuôi cong."
    },
    temperamentDescription: {
      en: "Sweet-natured, laid-back indoor companion with immense devotion to family members.",
      vi: "Tính cách ngọt ngào, thong thả trong nhà và dành sự tận tụy lớn cho các thành viên gia đình."
    },
    image: "https://images.unsplash.com/photo-1546975490-e8b92a360b24?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 2,
      trainability: 3,
      adaptability: 4,
      grooming: 2,
      exercise: 2
    },
    similarBreeds: ["beagle", "dachshund", "labrador-retriever", "pug"]
  },
  {
    id: "saint-bernard",
    name: "Saint Bernard",
    slug: "saint-bernard",
    origin: {
      en: "Switzerland",
      vi: "Thụy Sĩ"
    },
    size: "large",
    breedGroup: {
      en: "Working",
      vi: "Chó làm việc"
    },
    lifeExpectancy: {
      en: "8 – 10 years",
      vi: "8 – 10 năm"
    },
    weight: "64 – 120 kg",
    height: "65 – 90 cm",
    coat: {
      en: "Dense, smooth or rough coat in red/white patterns",
      vi: "Bộ lông dày mượt hoặc thô màu đỏ/trắng"
    },
    temperament: {
      en: ["Friendly", "Gentle", "Quiet", "Calm", "Watchful"],
      vi: ["Thân thiện", "Dịu dàng", "Yên lặng", "Điềm tĩnh", "Cảnh giác"]
    },
    description: {
      en: "Famous mountain rescue dog of the Swiss Alps, possessing immense power matched with calm, watchful benevolence.",
      vi: "Giống chó cứu hộ núi tuyết nổi tiếng của dãy Alps Thụy Sĩ, sở hữu sức mạnh phi thường đi kèm với sự nhân từ điềm tĩnh."
    },
    appearance: {
      en: "Massive head, furrowed brow, drooping jowls, deep chest, and dense weather-resistant coat.",
      vi: "Đầu lớn, trán có nếp nhăn, má chùng, lồng ngực sâu và bộ lông dày chống chịu thời tiết."
    },
    temperamentDescription: {
      en: "Famous for quiet patience around young children, earning them the nickname 'gentle giant'.",
      vi: "Nổi tiếng với sự kiên nhẫn dịu dàng bên trẻ em, mang lại biệt danh 'gã khổng lồ hiền lành'."
    },
    image: "https://images.unsplash.com/photo-1588943211146-06ce80532417?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 2,
      trainability: 4,
      adaptability: 3,
      grooming: 4,
      exercise: 3
    },
    similarBreeds: ["great-dane", "samoyed", "golden-retriever", "rottweiler"]
  },
  {
    id: "chihuahua",
    name: "Chihuahua",
    slug: "chihuahua",
    origin: {
      en: "Mexico",
      vi: "Mexico"
    },
    size: "small",
    breedGroup: {
      en: "Toy",
      vi: "Chó cảnh nhỏ (Toy)"
    },
    lifeExpectancy: {
      en: "14 – 16 years",
      vi: "14 – 16 năm"
    },
    weight: "1.5 – 3 kg",
    height: "15 – 23 cm",
    coat: {
      en: "Smooth or long coat, glossy and soft",
      vi: "Bộ lông mượt hoặc lông dài bóng mềm"
    },
    temperament: {
      en: ["Graceful", "Charming", "Sassy", "Devoted", "Alert"],
      vi: ["Duyên dáng", "Quyến rũ", "Lém lỉnh", "Tận tụy", "Cảnh giác"]
    },
    description: {
      en: "The smallest dog breed in the world has huge personality, apple-shaped skull, large erect ears, and fierce devotion.",
      vi: "Giống chó nhỏ nhất thế giới có cá tính lớn, hộp sọ hình quả táo, đôi tai đứng to và sự tận tụy mãnh liệt."
    },
    appearance: {
      en: "Tiny compact body, apple dome head, luminous dark eyes, erect ears, and sickle tail.",
      vi: "Thân hình nhỏ nhắn, đầu vòm quả táo, đôi mắt tối sáng long lanh, tai dựng và đuôi lưỡi liềm."
    },
    temperamentDescription: {
      en: "Spirited and charming, fiercely loyal to their chosen owner with a big dog attitude in a compact frame.",
      vi: "Linh hoạt và cá tính, cực kỳ trung thành với chủ nhân với thái độ của một chú chó lớn trong vóc dáng tí hon."
    },
    image: "https://images.unsplash.com/photo-1568572933414-04664870f209?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 3,
      energy: 3,
      trainability: 3,
      adaptability: 5,
      grooming: 1,
      exercise: 2
    },
    similarBreeds: ["pug", "french-bulldog", "shiba-inu", "dachshund"]
  },
  {
    id: "shih-tzu",
    name: "Shih Tzu",
    slug: "shih-tzu",
    origin: {
      en: "China (Tibet)",
      vi: "Trung Quốc (Tây Tạng)"
    },
    size: "small",
    breedGroup: {
      en: "Toy",
      vi: "Chó cảnh nhỏ (Toy)"
    },
    lifeExpectancy: {
      en: "10 – 16 years",
      vi: "10 – 16 năm"
    },
    weight: "4 – 7.5 kg",
    height: "20 – 28 cm",
    coat: {
      en: "Long, luxurious double coat",
      vi: "Bộ lông kép dài quý phái"
    },
    temperament: {
      en: ["Affectionate", "Playful", "Outgoing", "Friendly", "Happy"],
      vi: ["Tình cảm", "Ham chơi", "Hướng ngoại", "Thân thiện", "Vui vẻ"]
    },
    description: {
      en: "Bred solely as regal palace lap dogs in ancient China, Shih Tzus are sweet, loving companions with luxurious coats.",
      vi: "Được nuôi dưỡng làm chó cảnh hoàng gia trong các cung điện Trung Hoa cổ đại, Shih Tzu là người bạn ngọt ngào với bộ lông sang trọng."
    },
    appearance: {
      en: "Compact sturdy body with short muzzle, warm dark eyes, long coat, and heavily plumed tail.",
      vi: "Thân hình chắc chắn, mõm ngắn, đôi mắt ấm áp tối màu, lông dài và đuôi xù rậm."
    },
    temperamentDescription: {
      en: "Delightfully friendly and warm, happiest sitting on lap cushions alongside family.",
      vi: "Thân thiện và ấm áp, hạnh phúc nhất khi được ngồi trong lòng chủ nhân."
    },
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 2,
      trainability: 3,
      adaptability: 5,
      grooming: 5,
      exercise: 2
    },
    similarBreeds: ["pug", "french-bulldog", "chihuahua", "poodle"]
  },
  {
    id: "irish-setter",
    name: "Irish Setter",
    slug: "irish-setter",
    origin: {
      en: "Ireland",
      vi: "Ailen (Ireland)"
    },
    size: "large",
    breedGroup: {
      en: "Sporting",
      vi: "Chó thể thao"
    },
    lifeExpectancy: {
      en: "12 – 15 years",
      vi: "12 – 15 năm"
    },
    weight: "24 – 32 kg",
    height: "58 – 67 cm",
    coat: {
      en: "Feathered mahogany red coat",
      vi: "Bộ lông màu đỏ gồ gồ tuyệt đẹp với lớp bờm mượt"
    },
    temperament: {
      en: ["Active", "Affectionate", "Energetic", "Independent", "Playful"],
      vi: ["Năng động", "Tình cảm", "Tràn đầy năng lượng", "Độc lập", "Ham chơi"]
    },
    description: {
      en: "Famous for brilliant mahogany coat, long silky ears, and graceful high-spirited athletic strides.",
      vi: "Nổi tiếng với bộ lông đỏ sẫm tuyệt đẹp, đôi tai dài mềm như lụa và những bước chạy thể thao thanh thoát."
    },
    appearance: {
      en: "Slender athletic frame with aristocratic head contour, long feathered ears, silky chest feathering.",
      vi: "Khung thân thể thao mảnh mai, đường nét đầu quý tộc, tai dài mềm mại."
    },
    temperamentDescription: {
      en: "Enthusiastic and loving, thriving in energetic households with open yards to run.",
      vi: "Nhiệt tình và giàu tình cảm, phát triển tốt trong các gia đình có không gian sân vườn rộng rãi."
    },
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 5,
      trainability: 4,
      adaptability: 4,
      grooming: 4,
      exercise: 5
    },
    similarBreeds: ["golden-retriever", "flat-coated-retriever", "border-collie", "labrador-retriever"]
  },
  {
    id: "flat-coated-retriever",
    name: "Flat-Coated Retriever",
    slug: "flat-coated-retriever",
    origin: {
      en: "United Kingdom",
      vi: "Vương quốc Anh"
    },
    size: "large",
    breedGroup: {
      en: "Sporting",
      vi: "Chó thể thao"
    },
    lifeExpectancy: {
      en: "8 – 10 years",
      vi: "8 – 10 năm"
    },
    weight: "27 – 36 kg",
    height: "56 – 62 cm",
    coat: {
      en: "Dense, fine-to-medium flat coat in black or liver",
      vi: "Bộ lông phẳng mượt màu đen hoặc màu gan"
    },
    temperament: {
      en: ["Devoted", "Outgoing", "Optimistic", "Friendly", "Confident"],
      vi: ["Tận tụy", "Hướng ngoại", "Lạc quan", "Thân thiện", "Tự tin"]
    },
    description: {
      en: "Known as the 'Peter Pan' of gun dogs for maintaining puppy-like optimism and energy throughout life.",
      vi: "Được mệnh danh là 'Peter Pan' trong các giống chó săn nhờ duy trì tinh thần lạc quan và năng lượng như cún con suốt đời."
    },
    appearance: {
      en: "Lean reactive frame with long head, intelligent dark eyes, flat glossy coat, and wagging feathered tail.",
      vi: "Khung thân thon gọn phản ứng nhanh, đầu dài, đôi mắt tối thông minh và chiếc đuôi lông vũ luôn vẫy chào."
    },
    temperamentDescription: {
      en: "Forever youthful and outgoing, bringing cheerful playfulness to outdoor retrieves and family trips.",
      vi: "Luôn trẻ trung và hướng ngoại, mang lại sự vui vẻ cho các hoạt động thể thao và chuyến dã ngoại của gia đình."
    },
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=1000",
    characteristics: {
      friendliness: 5,
      energy: 5,
      trainability: 4,
      adaptability: 4,
      grooming: 3,
      exercise: 5
    },
    similarBreeds: ["golden-retriever", "labrador-retriever", "irish-setter", "border-collie"]
  }
];
