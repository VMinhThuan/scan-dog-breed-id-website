import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { TechnologyCard } from '../research/TechnologyCard';
import { Cpu, RefreshCw, Zap, Eye } from 'lucide-react';

export const TechStackSection = () => {
  const { t } = useTranslation('home');

  const techStackInfo = [
    {
      name: "CNN Architectures",
      tech: "ResNet50 / EfficientNet-B0 / MobileNetV3",
      description: t('features.feat1Desc'),
      category: "AI & Model Training"
    },
    {
      name: "Explainable AI",
      tech: "Grad-CAM",
      description: t('features.feat4Desc'),
      category: "Interpretability"
    },
    {
      name: "Inference Engine",
      tech: "ONNX Runtime",
      description: "Optimized model representation format enabling fast CPU/GPU inference latency.",
      category: "Deployment"
    },
    {
      name: "Web Platform",
      tech: "ReactJS + Tailwind CSS",
      description: "Modern, responsive frontend built with component architecture and Framer Motion.",
      category: "Interface"
    }
  ];

  const icons = [Cpu, RefreshCw, Zap, Eye];

  return (
    <section className="py-16">
      <SectionHeading
        badgeText={t('techStack.badge')}
        title={t('techStack.title')}
        subtitle={t('techStack.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStackInfo.map((tech, idx) => (
          <TechnologyCard
            key={idx}
            title={tech.name}
            tech={tech.tech}
            description={tech.description}
            category={tech.category}
            icon={icons[idx % icons.length]}
          />
        ))}
      </div>
    </section>
  );
};
