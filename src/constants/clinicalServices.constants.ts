import type { CategoryKey, ClinicalService } from '../types/clinicalServices.types';
import neckImage from '../assets/Neck Pain & Cervical Care.jpeg';
import lowerBackImage from '../assets/Lower Back Pain.jpeg';
import Sciatica from '../assets/Sciatica.jpeg';
import DiscBulge from '../assets/Disc Bulge.jpeg';
import ACLInjury from '../assets/ACL Injury.jpeg';
import SportsPerformance from '../assets/Sports Performance.jpeg';
import StrengthandConditioning from '../assets/Strength and Conditioning.jpeg';
import AnklePain from '../assets/Ankle Pain.jpeg';
import OnlinePhysio from '../assets/Online Physio.jpeg';
import HomePhysio from '../assets/Home Physio.jpeg';
import GeneralFitness from '../assets/General Fitness.jpeg';
import KidsStrengthening from '../assets/Kids Strengthening.jpeg';
import SeniorCitizen from '../assets/Senior Citizen.jpeg';
import WomenHealthPelvicCare from '../assets/Women Health & Pelvic Care.jpeg';
import DiastasisRectiProgram from '../assets/Diastasis Recti Program.jpeg';

export const WHATSAPP_PHONE = '8438118402';

export const assessmentSteps = [
  { title: 'Movement', description: 'Understand how your body moves.' },
  { title: 'Strength', description: 'Rebuild capacity for daily demands.' },
  { title: 'Mobility', description: 'Restore comfortable, useful motion.' },
  { title: 'Control', description: 'Improve stability and coordination.' },
  { title: 'Load and Capacity', description: 'Progress activity at the right pace.' },
  { title: 'Function', description: 'Return to what matters to you.' },
];

export const carePrinciples = [
  'No generic exercise sheets',
  'No one-size-fits-all protocols',
  'Program adjusted to symptoms & goals',
];

export const SERVICES: ClinicalService[] = [
  {
    id: '01',
    title: 'Cervical Radiculopathy',
    category: 'Spine & Nerve Care',
    categoryKey: 'spine',
    desc: 'Targeted neck decompression, active neural mobility, and posture restoration to help reduce arm pain, tingling, and numbness while rebuilding comfortable movement.',
    img: neckImage,
    side: 'left',
    detailsHeading: 'Symptoms:',
    details: [
      'Neck pain',
      'Pain radiating from neck to shoulder',
      'Pain radiating into the arm',
      'Tingling / pins and needles',
      'Numbness in the arm or hand',
      'Burning or electric-shock-like pain',
      'Arm or hand muscle weakness',
      'Reduced grip strength',
      'Altered or reduced reflexes',
      'Pain aggravated by neck movement',
    ],
  },
  {
    id: '02',
    title: 'Lower Back Pain',
    category: 'Spine & Nerve Care',
    categoryKey: 'spine',
    desc: 'Build back capacity with individual assessment, progressive strength, and movement strategies tailored to your daily activities and goals.',
    img: lowerBackImage,
    side: 'left',
    detailsHeading: 'Symptoms:',
    details: [
      'Stiffness in the lower back',
      'Pain spreading to the buttocks',
      'Pain aggravated by bending forward',
      'Pain aggravated by prolonged sitting',
      'Pain aggravated by prolonged standing',
      'Pain aggravated by lifting or physical activity',
      'Difficulty getting up from sitting',
      'Reduced lumbar range of movement',
      'Muscle tightness or spasm',
      'Difficulty walking or changing positions',
    ],
  },
  {
    id: '03',
    title: 'Sciatica',
    category: 'Spine & Nerve Care',
    categoryKey: 'spine',
    desc: 'Understand leg symptoms and progress mobility, strength, and confidence with a rehabilitation plan matched to your needs.',
    img: Sciatica,
    side: 'left',
    detailsHeading: 'Symptoms:',
    details: [
      'Pain radiating from the lower back to the buttock',
      'Pain travelling down the back or side of the leg',
      'Pain usually affecting one leg',
      'Sharp or shooting pain',
      'Burning or electric-shock-like pain',
      'Tingling / pins and needles',
      'Numbness in the leg or foot',
      'Leg or foot weakness',
    ],
  },
  {
    id: '04',
    title: 'Disc Bulge',
    category: 'Spine & Nerve Care',
    categoryKey: 'spine',
    desc: 'MRI findings are only one part of the picture. Restore movement and gradually improve tolerance for lifting, walking, work, and exercise.',
    img: DiscBulge,
    side: 'left',
    detailsHeading: 'Symptoms:',
    details: [
      'Localized back or neck pain',
      'Pain radiating into the arm or leg',
      'Tingling / pins and needles',
      'Numbness in the arm, hand, leg, or foot',
      'Muscle weakness',
      'Pain aggravated by bending, lifting, prolonged sitting, coughing, or sneezing',
      'Reduced spinal movement or stiffness',
      'Muscle spasm',
    ],
  },
  {
    id: '05',
    title: 'ACL Injury',
    category: 'Joint & Sports Rehab',
    categoryKey: 'joint',
    desc: 'A progressive return-to-activity plan develops knee strength, control, landing mechanics, and confidence using functional milestones.',
    img: ACLInjury,
    side: 'left',
    detailsHeading: 'Functional Problems:',
    details: [
      'Difficulty climbing stairs',
      'Difficulty squatting',
      'Difficulty walking',
      'Difficulty running',
      'Knee instability',
      'Reduced knee mobility',
      'Weakness',
      'Swelling management',
    ],
  },
  {
    id: '06',
    title: 'Sports Performance',
    category: 'Joint & Sports Rehab',
    categoryKey: 'joint',
    desc: 'Develop the speed, power, mobility, and conditioning your sport demands through structured training and measured progression.',
    img: SportsPerformance,
    side: 'right',
  },
  {
    id: '07',
    title: 'Strength and Conditioning',
    category: 'Joint & Sports Rehab',
    categoryKey: 'joint',
    desc: 'Personalised training builds strength, endurance, mobility, and work capacity around your starting point and performance goals.',
    img: StrengthandConditioning,
    side: 'right',
  },
  {
    id: '08',
    title: 'Ankle Pain',
    category: 'Joint & Sports Rehab',
    categoryKey: 'joint',
    desc: 'Ankle pain can make simple activities such as walking, climbing stairs, running or playing sport uncomfortable. It may develop after an injury, repetitive loading, reduced mobility or weakness around the ankle and lower limb.',
    img: AnklePain,
    side: 'right',
    detailsHeading: 'Symptoms:',
    details: [
      'Pain while walking or running',
      'Pain during jumping or landing',
      'Swelling around the ankle',
      'Ankle stiffness',
      'Difficulty moving the ankle fully',
      'Repeated ankle sprains',
      'Feeling of instability or giving way',
      'Reduced balance',
      'Difficulty climbing stairs',
      'Reduced ability to participate in sports',
    ],
  },
 
  {
    id: '09',
    title: 'General Fitness',
    category: 'Fitness & Wellness',
    categoryKey: 'fitness',
    desc: 'Build sustainable foundations in strength, cardiovascular fitness, mobility, and balance with training adapted to your experience and goals.',
    img: GeneralFitness,
    side: 'right',
  },
  {
    id: '10',
    title: 'Kids Strength Training',
    category: 'Fitness & Wellness',
    categoryKey: 'fitness',
    desc: 'Age-appropriate movement builds coordination, balance, mobility, and physical confidence in a safe and supportive setting.',
    img: KidsStrengthening,
    side: 'right',
  },
  {
    id: '11',
    title: 'Senior Citizen Wellness',
    category: 'Fitness & Wellness',
    categoryKey: 'fitness',
    desc: 'Support strength, balance, mobility, and independence with practical exercise tailored to individual abilities and everyday life.',
    img: SeniorCitizen,
    side: 'right',
  },
  {
    id: '12',
    title: "Women's Health",
    category: 'Fitness & Wellness',
    categoryKey: 'fitness',
    desc: 'Individualised physiotherapy supports movement, strength, and functional goals through different life stages and recovery needs.',
    img: WomenHealthPelvicCare,
    side: 'right',
  },
  {
    id: '13',
    title: 'Diastasis Recti Program',
    category: 'Fitness & Wellness',
    categoryKey: 'fitness',
    desc: 'Rebuild abdominal function through breathing, trunk control, progressive strength, and movement that restores confidence in daily activity.',
    img: DiastasisRectiProgram,
    side: 'left',
    detailsHeading: 'Symptoms:',
    details: [
      'Visible bulging or doming along the midline of the abdomen',
      'Gap or separation felt between the abdominal muscles',
      'Abdominal weakness',
      'Poor core stability',
      'Difficulty activating the deep abdominal muscles',
      'Abdominal bulging during sit-ups, coughing, or getting up from bed',
      'Reduced trunk strength',
      'Difficulty with lifting or carrying activities',
      'Lower back discomfort',
    ],
  },
  {
    id: '14',
    title: 'Online Physiotherapy',
    category: 'Virtual & Home Care',
    categoryKey: 'virtual',
    desc: 'Get expert assessment, exercise guidance, progress reviews, and programme adjustments through convenient virtual consultations, wherever you are.',
    img: OnlinePhysio,
    side: 'center',
    imageBadge: 'Virtual Care',
    detailsHeading: 'Suitable for selected individuals requiring:',
    details: [
      'Visible bulging or doming along the midline of the abdomen',
      'Gap or separation felt between the abdominal muscles',
      'Abdominal weakness',
      'Poor core stability',
      'Difficulty activating the deep abdominal muscles',
      'Abdominal bulging during sit-ups, coughing, or getting up from bed',
      'Reduced trunk strength',
      'Difficulty with lifting or carrying activities',
      'Lower back discomfort',
    ],
  },
  {
    id: '15',
    title: 'Home Physiotherapy',
    category: 'Virtual & Home Care',
    categoryKey: 'virtual',
    desc: 'Professional rehabilitation at your doorstep. If travelling to a clinic is difficult, our home physiotherapy service can bring rehabilitation to you.',
    img: HomePhysio,
    side: 'center',
    imageBadge: 'Home Care',
    detailsHeading: 'Suitable for selected individuals requiring:',
    details: [
      'Post-operative rehabilitation',
      'Mobility training',
      'Elderly care',
      'Home-based strengthening',
      'Neurological rehabilitation',
      'Functional training',
      'Recovery after injury',
    ],
  },
];

export const FILTERS: { label: string; key: CategoryKey | 'all' }[] = [
  { label: 'All Services', key: 'all' },
  { label: 'Spine & Nerve', key: 'spine' },
  { label: 'Joint & Sports Rehab', key: 'joint' },
  { label: 'Fitness & Wellness', key: 'fitness' },
  { label: 'Virtual & Home Care', key: 'virtual' },
];

export const getWhatsAppUrl = (service: ClinicalService, question: string) => {
  const message = `Hello Doctor, I have a doubt regarding *${service.title}*: "${question.trim()}"`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};
