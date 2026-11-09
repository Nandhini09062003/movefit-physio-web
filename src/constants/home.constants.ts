import type { Difference, GoogleReview, Specialty } from '../types/home.types';
import neckCareImage from '../assets/Neck Pain & Cervical Care.jpeg';
import sportsCareImage from '../assets/Sports Injury & Performance Rehab.jpeg';
import jointCareImage from '../assets/Knee Pain & Joint Rehabilitation.jpeg';
import shoulderCareImage from '../assets/Shoulder Mobility & Care.jpeg';
import pelvicCareImage from '../assets/Women Health & Pelvic Care.jpeg';
import geriatricCareImage from '../assets/Geriatric Wellness & Active Aging.jpeg';

export const WHATSAPP_NUMBER = '8438118402';
export const GOOGLE_REVIEWS_URL = 'https://search.google.com/local/reviews?placeid=ChIJ_5bQFVAvqjsR0Up1azxR-c0';
export const GOOGLE_WRITE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJ_5bQFVAvqjsR0Up1azxR-c0';

export const openWhatsAppAppointment = () => {
  const message = encodeURIComponent('Hello Movefit Team, I would like to book an appointment for a physiotherapy consultation.');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
};

export const googleReviews: GoogleReview[] = [
  {
    author: 'Kapilan',
    initial: 'K',
    description: 'I had back pain for a long time and it was really troubling me. I started taking treatment from him and slowly I started feeling better. He listens to the problem patiently and explains everything in a simple way. The exercises he suggested helped me a lot. Now my back pain is much better and I feel more comfortable in my daily life. Really happy with his treatment and I would definitely recommend him.',
    avatarClass: 'featured-review-avatar-brown',
  },
  {
    author: 'Thangavel P',
    initial: 'T',
    description: 'My neck pain got completely cured after visiting many doctors. Good therapist, shared lots of inputs. Dr. Sakthivel is educated, well trained, very talented, and strongly recommended.',
    avatarClass: 'featured-review-avatar-teal',
  },
  {
    author: 'Hari Hari',
    initial: 'H',
    description: 'This helped to improve my walking and mobility.Now I able to walk and run better.We are thankful for this team and their patience, motivation and guidance.One of the best clinic in karur.',
    avatarClass: 'featured-review-avatar-amber',
  },
  {
    author: 'BALAMURUGAN P',
    initial: 'B',
    description: 'I took online physiotherapy sessions with Dr. Sakthivel for my back pain and had a very good experience. He explained the exercises clearly and guided me patiently throughout the sessions.I felt improvement with his guidance and would definitely recommend his physiotherapy service.',
    avatarClass: 'featured-review-avatar-orange',
  },
];

export const differences: Difference[] = [
  { title: 'Tailored Rehabilitation Protocols', description: 'We recognize that no two injuries or bodies are identical. We design fully customized movement strategies built around your unique biomechanics, daily habits, and personal functional goals. Every exercise plan evolves alongside your progress to keep your recovery efficient and targeted. Rather than applying a standard template, we adapt every session to match your body\'s real-time response. This individualized care ensures you gain the exact stability and strength required for your lifestyle.' },
  { title: 'Proven Patient Outcomes', description: 'Our clinical track record is defined by measurable, long-term functional recovery for thousands of patients. We rely strictly on evidence-based protocols that prioritize sustainable physical restoration over quick fixes. By tracking your mobility and strength improvements at every stage, we ensure consistent and verifiable progress. Patients leave MoveFit not just symptom-free, but with greater physical capability than before their injury. Our data-driven methods guarantee that your time spent in therapy yields genuine, lasting results.' },
  { title: 'Holistic Body System Approach', description: 'Pain in one region often stems from imbalances or movement dysfunctions in another. We evaluate your entire kinetic chain to understand how your posture, gait, and movement patterns interact. By treating your body as an interconnected system, we address the underlying physical stress rather than just chasing localized pain. This comprehensive approach improves your overall movement efficiency and energy levels. Ultimately, it restores full-body harmony and protects you against compensatory injuries down the road.' },
  { title: 'Root-Cause Diagnostic Precision', description: 'True recovery begins with an accurate, in-depth understanding of what is causing your movement restriction. Our specialists conduct thorough functional evaluations to pinpoint the exact structural and mechanical root cause. We take the time to explain your diagnosis clearly so you understand how your body is currently functioning. This diagnostic clarity prevents wasted time on ineffective treatments and focuses directly on solution-driven care. Armed with precise insight, we target the exact tissue and movement flaw from day one.' },
  { title: 'Sustainable Long-Term Recovery', description: 'We actively reject temporary surface remedies that only provide brief relief without solving the issue. Our primary mission is to rebuild your structural resilience through targeted physical conditioning and movement retraining. We equip you with the physical strength and biomechanical habits needed to maintain a healthy body independently. By fortifying vulnerable joint angles and correcting movement patterns, we minimize the risk of future reinjury. Our goal is to empower you with a resilient body that stays pain-free for life.' },
  { title: 'Specialized Clinical Expertise', description: 'You are guided by dedicated physical therapy professionals who bring advanced clinical knowledge to every session. Our team stays at the forefront of modern exercise science and functional rehabilitation research. We break down complex movement mechanics into simple, actionable steps that make your recovery straightforward. From acute injury management to advanced return-to-sport training, you receive expert clinical supervision at every phase. You can move with complete confidence knowing you are under qualified, professional care.' },
  { title: '100% Active Rehabilitation', description: 'At Movefit, we make movement an active part of your recovery. Every exercise is chosen with a purpose: to improve strength, mobility, control, balance and confidence in the things you do every day. You’ll understand what you’re doing, why you’re doing it, and how to progress. As your body adapts, your rehabilitation evolves with you - from simple movements to the demands of work, sport and everyday life.We believe movement should be part of the solution. Our rehabilitation focuses on purposeful exercise, progressive challenges and real-world movement - helping you build strength, control and confidence at every stage of recovery.' },
  { title: 'Dedicated One-on-One Care', description: 'Every session at MoveFit is conducted as a focused, one-on-one consultation with your physical therapist. You receive undivided clinical attention, ensuring every movement is executed with optimal form and safety. This dedicated setting allows us to provide instant feedback and adjust exercise intensity in real time. It fosters a supportive, collaborative environment where your questions and concerns are always addressed immediately. With undivided focus on your progress, you achieve faster, more reliable recovery outcomes.' },
];

export const specialties: Specialty[] = [
  {
    title: 'Neck Pain & Cervical Care',
    pathway: 'Targeted Exercise & Mobility',
    description: 'Relieve chronic stiffness and cervical strain without passive machines. We use precise active movement protocols, postural alignment, and strengthening exercises to treat the root cause of your neck pain and restore complete head and neck mobility.',
    image: neckCareImage,
  },
  {
    title: 'Sports Injury & Performance Rehab',
    pathway: 'Active Functional Recovery',
    description: 'Get back to peak play through dynamic movement. We bypass quick-fix machine modalities in favor of tailored exercise progression, biomechanical conditioning, and athletic rebuilding to help your body bounce back stronger and prevent future injury.',
    image: sportsCareImage,
  },
  {
    title: 'Knee Pain & Joint Rehabilitation',
    pathway: 'Strength-Driven Joint Health',
    description: 'Rebuild knee stability and load tolerance naturally. Our exercise-based programs focus on strengthening the surrounding muscles, improving joint alignment, and restoring full mobility so you can walk, run, and pain-free squat.',
    image: jointCareImage,
  },
  {
    title: 'Shoulder Mobility & Care',
    pathway: 'Active Rotator Cuff & Joint Rehab',
    description: 'Overcome rotator cuff issues, impingements, or frozen shoulder through purposeful motion. We guide you through progressive exercise therapies designed to stabilize the shoulder joint, rebuild strength, and restore full overhead range of motion.',
    image: shoulderCareImage,
  },
  {
    title: "Women's Health & Pelvic Care",
    pathway: 'Personalized Movement & Core Therapy',
    description: 'Dedicated care tailored for prenatal, postnatal, and pelvic health needs. Using targeted strength training, core reactivation, and movement correction, we help women rebuild physical confidence, restore stability, and improve overall vitality at every stage of life.',
    image: pelvicCareImage,
  },
  {
    title: 'Geriatric Wellness & Active Aging',
    pathway: 'Functional Strength & Balance',
    description: 'Preserve independence, improve balance, and prevent falls through safe, structured movement. Our hands-on exercise programs focus on rebuilding functional strength, joint flexibility, and everyday mobility for a vibrant, confident lifestyle.',
    image: geriatricCareImage,
  },
];




