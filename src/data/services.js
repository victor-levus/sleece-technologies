import {
  Code2, Phone, Cloud, Network, Lightbulb,
  Zap, Wifi, ShieldCheck, GraduationCap,
} from 'lucide-react'
import { createElement } from 'react'

export const services = [
  {
    id: 'software-development',
    icon: Code2,
    category: 'Technology',
    title: 'Software Development & Enterprise Applications',
    description:
      'We design and build robust, scalable software solutions tailored to your business workflows — from web and mobile applications to full enterprise platforms that drive operational efficiency.',
    items: [
      'Custom web & mobile application development',
      'Enterprise resource planning (ERP) systems',
      'Business process automation',
      'API development & third-party integrations',
      'Legacy system modernisation',
      'Software maintenance & support',
    ],
  },
  {
    id: 'voip-communications',
    icon: Phone,
    category: 'Technology',
    title: 'VoIP & Unified Communication Systems',
    description:
      'We deploy modern voice and unified communications infrastructure that connects your teams and clients seamlessly — reducing costs while improving collaboration.',
    items: [
      'VoIP phone system installation & configuration',
      'IP PBX deployment',
      'Video conferencing infrastructure',
      'Unified messaging platforms',
      'Call centre solutions',
      'Communication system maintenance',
    ],
  },
  {
    id: 'cloud-devops',
    icon: Cloud,
    category: 'Technology',
    title: 'Cloud & DevOps Solutions',
    description:
      'We help organisations migrate to the cloud and adopt DevOps practices that accelerate delivery, improve reliability, and reduce infrastructure costs.',
    items: [
      'Cloud migration & architecture design',
      'AWS, Azure & Google Cloud deployment',
      'CI/CD pipeline setup & automation',
      'Infrastructure as Code (IaC)',
      'Container orchestration (Docker, Kubernetes)',
      'Cloud monitoring & cost optimisation',
    ],
  },
  {
    id: 'ict-infrastructure',
    icon: Network,
    category: 'Infrastructure',
    title: 'ICT Infrastructure Deployment',
    description:
      'End-to-end planning, procurement, and deployment of complete ICT infrastructure — from structured cabling to data centres — built to scale with your organisation.',
    items: [
      'Structured cabling & network infrastructure',
      'Server rack installation & configuration',
      'Data centre setup & management',
      'LAN/WAN design & deployment',
      'IT asset procurement & management',
      'Infrastructure audit & optimisation',
    ],
  },
  {
    id: 'digital-transformation',
    icon: Lightbulb,
    category: 'Consulting',
    title: 'Digital Transformation Consulting',
    description:
      'Strategic advisory services to guide organisations through the digital transformation journey — aligning technology investments with business goals for maximum impact.',
    items: [
      'Digital strategy development',
      'Technology roadmap planning',
      'Process digitisation & optimisation',
      'Change management & adoption support',
      'IT governance & policy frameworks',
      'Technology vendor selection & management',
    ],
  },
  {
    id: 'power-solutions',
    icon: Zap,
    category: 'Power',
    title: 'Power Solutions',
    description:
      'Reliable power is critical to operations. We provide professional installation of solar, inverter, generator, and electrical systems for residential, commercial, and industrial environments.',
    items: [
      'Solar energy system design & installation',
      'Inverter & battery backup installation',
      'Heavy-duty generator supply & installation',
      'Electrical wiring & panel installation',
      'Integrated power management systems',
      'Power system maintenance & servicing',
    ],
  },
  {
    id: 'networking-connectivity',
    icon: Wifi,
    category: 'Infrastructure',
    title: 'Networking & Connectivity Solutions',
    description:
      'We build secure, high-performance networking environments — from wireless distribution to fibre optic backbone — ensuring your organisation stays connected and productive.',
    items: [
      'Router, switch & firewall installation',
      'Wireless network design & deployment',
      'Fibre optic cable installation',
      'CCTV surveillance system installation',
      'Internet connectivity solutions',
      'Network monitoring & management',
    ],
  },
  {
    id: 'security-technology',
    icon: ShieldCheck,
    category: 'Security',
    title: 'Security Technology',
    description:
      'Advanced physical security solutions for critical facilities — from perimeter protection to screening systems — integrated and professionally installed to protect people and assets.',
    items: [
      'Bollard & vehicle barrier systems',
      'Under-vehicle scanner systems',
      'Baggage & parcel scanner installation',
      'Walk-through security scanners',
      'Access control & biometric systems',
      'Integrated security management platforms',
    ],
  },
  {
    id: 'ict-consulting-training',
    icon: GraduationCap,
    category: 'Consulting',
    title: 'ICT Consulting & Training',
    description:
      'We equip organisations and individuals with the knowledge and skills to leverage modern technologies effectively — from hands-on technical training to strategic ICT advisory.',
    items: [
      'Professional ICT skills training',
      'Technology advisory & consultancy',
      'System integration support',
      'IT project management consulting',
      'Cybersecurity awareness training',
      'Strategic ICT planning & implementation',
    ],
  },
]

export const categories = ['All', 'Technology', 'Infrastructure', 'Power', 'Security', 'Consulting']
