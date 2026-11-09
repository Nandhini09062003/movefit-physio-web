import React, { useEffect, useRef, useState } from 'react';
import { Activity, ArrowRight, CalendarDays, Dumbbell, HeartPulse, Phone, ShieldCheck } from 'lucide-react';
import activeRehabilitationVideo from '../videos/active-rehabilitation.mp4';
import patientProgressVideo from '../videos/patient-progress.mp4';
import StrokeRehabVideo from '../videos/StrokeRehab.mp4';
import ExerciseTherapyVideo from '../videos/ExerciseTherapy.mp4';
import AnimatedText from './AnimatedText';
import Header from './Header';
import Footer from './Footer';
import {
  differences,
  googleReviews,
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
  openWhatsAppAppointment,
  specialties,
} from '../constants/home.constants';

export const HomePage: React.FC = () => {
  const [activeSpecialty, setActiveSpecialty] = useState(0);
  const [activeDifference, setActiveDifference] = useState(0);
  const [stats, setStats] = useState([0, 0]);
  const [isReviewsHovered, setIsReviewsHovered] = useState(false);
  const statsSectionRef = useRef<HTMLElement | null>(null);
  const specialtyDetailRef = useRef<HTMLDivElement | null>(null);
  const reviewsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const statsSection = statsSectionRef.current;

    if (!statsSection) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }

      observer.disconnect();
      const startTime = performance.now();
      const duration = 1400;

      const animateStats = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setStats([
          Math.round(100 * easedProgress),
          Math.round(5000 * easedProgress),
        ]);

        if (progress < 1) {
          requestAnimationFrame(animateStats);
        }
      };

      requestAnimationFrame(animateStats);
    }, { threshold: 0.35 });

    observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = reviewsContainerRef.current;
    if (!scrollContainer || isReviewsHovered) return;

    const intervalId = window.setInterval(() => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (maxScrollLeft <= 0) return;

      const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 2;
      if (isAtEnd) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isReviewsHovered]);

  const handleSpecialtySelect = (index: number) => {
    setActiveSpecialty(index);

    if (window.matchMedia('(max-width: 991.98px)').matches) {
      requestAnimationFrame(() => {
        specialtyDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const scrollReviews = (direction: -1 | 1) => {
    reviewsContainerRef.current?.scrollBy({ left: 380 * direction, behavior: 'smooth' });
  };

  const words = ['Strength', 'Mobility', 'Stability', 'Flexibility', 'Endurance', 'Speed', 'Agility', 'Balance', 'Coordination', 'Reaction Time', 'Power', 'Body Composition', 'Movement Control', 'Load Tolerance'];
  const heroServices = [
    { label: 'Pain Management', Icon: HeartPulse },
    { label: 'Injury Rehab', Icon: Activity },
    { label: 'Post-Surgery Rehab', Icon: ShieldCheck },
    { label: 'Strength & Conditioning', Icon: Dumbbell },
  ];

  return (
    <div className="home-page">
      <Header />

      {/* 2. Hero Section */}
      <section id="home" className="hero-compact border-bottom">
        <div className="hero-text-col">
          <span className="badge bg-danger text-white mb-3 px-3 py-2 text-uppercase fs-6">Never Stop Moving</span>
          <AnimatedText
            headingLevel="h1"
            animationType="wordWave"
            title={(
              <>
                <span className="hero-title-primary">Science of Healing.</span>
                <br />
                <span className="hero-title-accent">Art of Motion.</span>
              </>
            )}
            titleClassName="display-4 fw-bold text-dark mb-3"
            titleStyle={{
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          />
          <p className="lead text-dark fw-semibold mb-3">
            Healing isn't just about treating symptoms - it’s about restoring harmony to how you live and feel. We blend targeted medical care with personalized movement to guide your journey back to full vitality.
          </p>
          <div className="home-hero-services mb-2" aria-label="Our services">
            {heroServices.map(({ label, Icon }) => (
              <div className="home-hero-service" key={label}>
                <span className="home-hero-service-icon">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <button onClick={openWhatsAppAppointment} className="btn btn-movefit-red btn-lg rounded-pill px-4 shadow-sm me-3 hero-book-appointment">
            <CalendarDays aria-hidden="true" size={20} /> Book Appointment <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </section>
      <div className="marquee-container" aria-label="Movefit performance focus marquee">
        <div className="marquee-track">
          <div className="marquee-group">
            {words.map((word, index) => (
              <React.Fragment key={word}>
                <span className="marquee-item">{word}</span>
                <span className={`ticker-dot ${index === words.length - 1 ? 'ticker-dot-last' : ''}`}>•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Clinic Introduction */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="lead text-dark fw-semibold mb-4">
                As your physiotherapists, we see beyond your symptoms; we see your potential. Pain, injury, or physical limitations should not dictate how you live your life. Whether you are fighting back from a debilitating injury, breaking free from the burden of chronic pain, or striving to push past your personal athletic boundaries, our clinic is your launchpad. We build evidence-based, highly customized rehab programs centered entirely on your unique story, body, and ambitions.
              </p>
              <p className="lead text-dark fw-semibold mb-0">
                Your body was built to move, adapt, and heal. Let's unlock that strength together, rebuild your confidence, and redefine what's possible for your health. Step into MoveFit today, and let's turn your recovery into your greatest strength!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Specialties */}
      <section id="specialized" className="specialties-section py-5">
        <div className="container">
          <div className="specialties-heading mb-5">
            <span className="text-movefit-red text-uppercase fw-semibold">Pathways to recovery</span>
            <AnimatedText headingLevel="h2" animationType="fadeUp" title="Our Core Specialties" titleClassName="fw-bold mb-3" />
            <p className="text-dark mb-0">Active, evidence-based pathways designed around the way you want to move.</p>
          </div>

          <div className="specialties-layout">
            <div className="specialty-stepper" role="tablist" aria-label="Core specialties">
              {specialties.map((specialty, index) => (
                <button
                  className={`specialty-step${activeSpecialty === index ? ' active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeSpecialty === index}
                  key={specialty.title}
                  onClick={() => handleSpecialtySelect(index)}
                >
                  <span className="specialty-step-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="specialty-step-copy">
                    <strong>{specialty.title}</strong>
                    <span>{specialty.pathway}</span>
                  </span>
                  <span className="specialty-step-arrow" aria-hidden="true">-&gt;</span>
                </button>
              ))}
            </div>

            <div
              ref={specialtyDetailRef}
              className="specialty-detail"
              style={{
                backgroundImage: specialties[activeSpecialty].image
                  ? `url("${specialties[activeSpecialty].image}")`
                  : undefined,
              }}
              role="tabpanel"
            >
              <div className="specialty-detail-content">
                <div className="specialty-detail-top">
                  <span className="specialty-detail-number">{String(activeSpecialty + 1).padStart(2, '0')}</span>
                </div>
                <div className="specialty-detail-copy">
                  <h1>{specialties[activeSpecialty].title}</h1>
                  <h4>{specialties[activeSpecialty].pathway}</h4>
                  <p>{specialties[activeSpecialty].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Google Reviews */}
      <section id="reviews" className="google-reviews-section py-5">
        <div className="container">
          <div className="google-reviews-heading">
            <div>
              <span className="text-movefit-red text-uppercase fw-semibold">Patient voice</span>
              <AnimatedText headingLevel="h2" animationType="splitWords" title="Google Reviews" titleClassName="fw-bold mb-2" />
              <p className="text-dark mb-0">Real experiences from the Movefit physiotherapy community.</p>
            </div>
          </div>
          <div
            className="reviews-slider-wrapper"
            onMouseEnter={() => setIsReviewsHovered(true)}
            onMouseLeave={() => setIsReviewsHovered(false)}
          >
            {googleReviews.length > 3 && (
              <>
                <button type="button" className="slider-arrow left-arrow" aria-label="Scroll reviews left" onClick={() => scrollReviews(-1)}>❮</button>
                <button type="button" className="slider-arrow right-arrow" aria-label="Scroll reviews right" onClick={() => scrollReviews(1)}>❯</button>
              </>
            )}
            <div className="featured-review-grid" ref={reviewsContainerRef}>
              {googleReviews.map((review) => (
                <article className="featured-review-card" key={review.author}>
                  <div className="featured-review-meta">
                    <span className={`featured-review-avatar ${review.avatarClass ?? ''}`}>{review.initial}</span>
                    <span><strong>{review.author}</strong><small>Google review</small></span>
                    <span className="google-review-action-icon" aria-hidden="true">G</span>
                  </div>
                  <div className="featured-review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote>“{review.description}”</blockquote>
                </article>
              ))}
            </div>
          </div>
          <div className="google-review-actions">
            <a className="google-review-action google-review-write" href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noreferrer">
              <span className="google-review-action-icon" aria-hidden="true">G</span>
              <span><strong>Write a Review</strong><small>Share your Movefit experience on Google</small></span>
              <span className="google-review-action-arrow" aria-hidden="true">-&gt;</span>
            </a>
            <a className="google-review-action google-review-view" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
              <span className="google-review-action-icon" aria-hidden="true">G</span>
              <span><strong>View Google Reviews</strong><small>Read the latest patient feedback</small></span>
              <span className="google-review-action-arrow" aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. Why MoveFit Stands Apart */}
      <section className="radar-section py-5" id="why-movefit">
        <div className="container">
          <div className="radar-heading">
            <span className="text-movefit-red text-uppercase fw-semibold">The MoveFit difference</span>
            <AnimatedText headingLevel="h2" animationType="fadeUp" title="Why MoveFit Stands Apart" titleClassName="fw-bold" />
            <p className="text-dark">A connected 360-degree system for precision, movement, and lasting independence.</p>
          </div>

          <div className="difference-accordion" aria-label="Why MoveFit stands apart topics">
            {differences.map((difference, index) => (
              <div
                key={difference.title}
                className={`difference-item${activeDifference === index ? ' active' : ''}`}
              >
                <button
                  type="button"
                  className="difference-trigger"
                  aria-expanded={activeDifference === index}
                  aria-controls={`difference-panel-${index}`}
                  onClick={() => setActiveDifference(activeDifference === index ? -1 : index)}
                >
                  <span className="difference-number">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{difference.title}</strong>
                  <span className="difference-icon" aria-hidden="true">{activeDifference === index ? '-' : '+'}</span>
                </button>
                <div
                  id={`difference-panel-${index}`}
                  className="difference-panel"
                  role="region"
                  aria-hidden={activeDifference !== index}
                >
                  <p>{difference.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Proven Patient Transformations */}
      <section ref={statsSectionRef} className="transformations-section py-5" id="transformations">
        <div className="container">
          <div className="transformations-heading">
            <span className="text-movefit-red text-uppercase fw-semibold">Proven patient transformations</span>
            <AnimatedText headingLevel="h2" animationType="fadeUp" title="Movement that changes what is possible." titleClassName="fw-bold mb-3" />
            <p className="text-dark mb-0">Measured progress, guided by active rehabilitation and consistent clinical support.</p>
          </div>

          <div className="stats-banner" aria-label="MoveFit patient transformation statistics">
            <div className="stat-item">
              <strong>{stats[0]}%</strong>
              <span>Functional Recovery Rate</span>
              <small>Verified Patient Outcomes</small>
            </div>
            <div className="stat-divider" aria-hidden="true"></div>
            <div className="stat-item">
              <strong>{stats[1].toLocaleString()}+</strong>
              <span>Rehabilitation Sessions Completed</span>
              <small>Active Movement Guidance</small>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Movement in Action */}
      <section className="video-section py-5" id="movement-in-action">
        <div className="container">
          <div className="video-section-heading">
            <span className="text-movefit-red text-uppercase fw-semibold">Movement in action</span>
            <AnimatedText headingLevel="h2" animationType="fadeUp" title="See recovery in motion." titleClassName="fw-bold mb-3" />
            <p className="text-dark mb-0">Real exercise guidance, focused movement, and progress built one session at a time.</p>
          </div>

          <div className="transformation-videos">
            <article className="transformation-video-card">
              <video className="transformation-video" controls preload="metadata" playsInline>
                <source src={activeRehabilitationVideo} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </article>
            <article className="transformation-video-card">
              <video className="transformation-video" controls preload="metadata" playsInline>
                <source src={patientProgressVideo} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </article>
            <article className="transformation-video-card">
              <video className="transformation-video" controls preload="metadata" playsInline>
                <source src={StrokeRehabVideo} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </article>
            <article className="transformation-video-card">
              <video className="transformation-video" controls preload="metadata" playsInline>
                <source src={ExerciseTherapyVideo} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </article>
          </div>
        </div>
      </section>

      {/* 9. Reach Us */}
      <section className="reach-us-section py-5" id="reach-us">
        <div className="container">
          <div className="reach-us-heading">
            <span className="text-movefit-red text-uppercase fw-semibold">Start your active recovery</span>
            <AnimatedText headingLevel="h2" animationType="fadeUp" title="Ready to Move Without Pain?" titleClassName="fw-bold" />
          </div>

          <div className="reach-us-layout">
            <div className="reach-us-map">
              <iframe
                title="Movefit Physio Rehab Clinic location in Vengamedu, Karur"
                src="https://maps.google.com/maps?q=Movefit%20physiotherapy%20Karur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>

            <div className="reach-us-card">
              <p className="reach-us-quote">“Your body is built to move, not to stay in pain. Let’s reclaim your strength together.”</p>
              <div className="reach-us-details">
                <div>
                  <span className="reach-us-label">Location</span>
                  <p>1st Floor, Apollo Pharmacy (Opp. to SBI Bank), Vengamedu, Karur - 639006</p>
                </div>
                <div>
                  <span className="reach-us-label">Hours</span>
                  <p>Monday - Saturday : 5.30 A.M-9.00 A.M | 10.00 A.M-1.00 P.M | 4.00 P.M-9.00 P.M</p>
                </div>
                <div>
                  <span className="reach-us-label">Care options</span>
                  <p>In-Clinic Sessions | Online Consultation | Home Visits</p>
                </div>
                <div>
                  <span className="reach-us-label">Phone</span>
                  <p><a href="tel:+918438118402">+91 8438118402</a></p>
                </div>
              </div>
              <div className="reach-us-actions">
                <a
                  className="btn btn-movefit-red rounded-pill px-4"
                  href="https://www.google.com/maps/dir/?api=1&destination=1st%20Floor%2C%20Apollo%20Pharmacy%2C%20Opposite%20SBI%20Bank%2C%20Vengamedu%2C%20Karur%20639006"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a className="btn reach-us-call rounded-pill px-4 text-decoration-none" href="tel:+918438118402">
                  <Phone aria-hidden="true" size={18} /> Call Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};