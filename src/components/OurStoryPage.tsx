import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Check, HeartPulse, ShieldCheck, Target, Zap } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import AnimatedText from './AnimatedText';
import purposeImage from '../assets/women health and pelvic care.jpg';
import doctorImage from '../assets/doctor.jpeg';
import { animationVariants } from '../constants/animatedText.constants';
import { recoveryGoals, differences } from '../constants/ourStory.constants';

const OurStoryPage: React.FC = () => (
    <div className="our-story-page">
        <Header />
        <main>
            <section className="story-hero">
                <div className="story-hero-inner">
                    <div className="story-hero-copy">
                        <span className="story-eyebrow">About Movefit</span>
                        <AnimatedText
                            headingLevel="h1"
                            animationType="scaleUp"
                            title="MOVEMENT IS MORE THAN EXERCISE. IT IS INDEPENDENCE."
                            titleClassName="story-hero-title"
                            titleStyle={{
                                fontSize: 'clamp(2.1rem, 2vw, 3.5rem)',
                                fontWeight: 800,
                                color: '#fdfdfd',
                                lineHeight: 1.15,
                                margin: 0,
                            }}
                        />
                        <p>
                            At Movefit Physio Rehab Clinic, Karur, we believe physiotherapy should do more than
                            reduce pain. It should help you understand your body, rebuild strength, restore confidence
                            and return to the life you want to live.
                        </p>
                    </div>
                    <aside className="story-hero-quote">
                        <span>Our purpose</span>
                        {/*<blockquote>Build your capacity. Restore your confidence. Get you moving again.</blockquote>*/}
                        <ul className="hero-purpose-list">
                            {['Build your capacity.', 'Restore your confidence.', 'Get you moving again.'].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-50px' }}
                                    variants={animationVariants.fadeUp.title}
                                    transition={{ duration: 0.45, delay: index * 0.16, ease: 'easeOut' }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={animationVariants.slideRight.title}
                            transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
                        >
                            <strong>ASSESS</strong><i /> <strong>EDUCATE</strong><i /> <strong>REBUILD</strong>
                        </motion.div>
                    </aside>
                </div>
            </section>

            <section className="story-section">
                <div className="story-container story-purpose">
                    <div className="story-copy">
                        <span className="story-section-kicker">Why Movefit was created</span>
                       {/* <h2>High-quality rehabilitation, built around people.</h2>*/}
                        <AnimatedText
                            headingLevel="h2"
                            animationType="wordWave"
                            title="High-quality rehabilitation, built around people."
                            titleClassName="story-section-title"
                            titleStyle={{
                                fontSize: 30,
                                paddingBottom: 14
                                
                            }}
                        />
                        <p><strong>Our purpose is to bring high-quality, evidence-informed physiotherapy and active rehabilitation to the people of Karur.</strong></p>
                        <p>
                            Our approach combines clinical assessment, movement therapy, progressive exercise,
                            patient education and functional rehabilitation to address the individual, not just
                            the symptoms.
                        </p>
                        <p>
                            Whether you are recovering from injury, living with persistent pain, returning to sport,
                            rebuilding strength after surgery, or becoming healthier and more active, our goal is the same.
                        </p>
                        <div className="story-highlight-pills">
                            <span><Zap size={15} aria-hidden="true" />Build capacity</span>
                            <span><ShieldCheck size={15} aria-hidden="true" />Restore confidence</span>
                            <span><ArrowRight size={15} aria-hidden="true" />Get moving again</span>
                        </div>
                    </div>
                    <div className="story-image-frame">
                        <img className="story-purpose-image" src={purposeImage} alt="Physiotherapist supporting a patient through guided movement" />

                    </div>
                </div>
            </section>

            <section className="story-section story-founder-section">
                <article className="story-container story-founder">
                    <div className="story-founder-media">
                        <div className="story-founder-image">
                            <img src={doctorImage} alt="Dr. U. Sakthivel, BPT" />
                        </div>

                    </div>
                    <div className="story-copy">
                        <span className="story-section-kicker">Meet the founder</span>
                       
                        <AnimatedText
                            headingLevel="h2"
                            animationType="splitWords"
                            title="Care with a purpose beyond pain relief."
                            titleClassName="story-section-title"
                            titleStyle={{
                                fontSize: 34,
                                paddingBottom: 20,
                                color: '#fcfcfc'
                                
                            }}
                        />
                        <p className="story-founder-name">Dr. U. SAKTHIVEL</p>
                        <p className="story-founder-role">Founder &amp; Physiotherapist | Movefit Physio Rehab Clinic</p>
                        <p>
                            Specialized in Musculoskeletal Physiotherapy, Sports Rehabilitation, and Exercise-Based Therapy, our clinical practice centers on delivering evidence-informed, movement-first care that targets the true root cause of dysfunction rather than merely offering temporary symptom relief.
                        </p>
                        <p>
                            From complex sports injuries and post-operative rehabilitation to chronic joint pain and movement limitations, every treatment strategy is meticulously tailored to the individual-empowering patients to rebuild physical strength, restore complete mobility, and regain lasting confidence in their body&apos;s natural movement.
                        </p>
                        <blockquote className="story-founder-quote">
                            Movefit began with a purpose: make quality physiotherapy more accessible, move beyond
                            temporary pain relief, and put active recovery before passive dependence.
                        </blockquote>
                        <div className="story-pillars">
                            <div className="story-pillar">
                                <HeartPulse size={19} aria-hidden="true" />
                                <span><strong>Accessible Quality</strong><small>Evidence-informed care made more accessible to our community.</small></span>
                            </div>
                            <div className="story-pillar">
                                <Activity size={19} aria-hidden="true" />
                                <span><strong>Active Recovery First</strong><small>Build understanding, movement and independence through active care.</small></span>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <section className="story-section story-capacity-section">
                <div className="story-container">
                    <div className="story-section-heading">
                        <span className="story-section-kicker">Our philosophy</span>
                        {/*<h2>Don&apos;t just treat the pain. Understand why it is there.</h2>*/}
                        <AnimatedText
                            headingLevel="h2"
                            animationType="slideRight"
                            align="center"
                            title="Don't just treat the pain. Understand why it is there."
                            titleClassName="story-section-title"
                            titleStyle={{
                                fontSize: 35,
                                color: '#100000',
                                maxWidth: '700px',
                                margin: '0 auto',
                                textAlign: 'center'

                            }}
                        />
                        <p>
                            Recovery is not just about feeling better. It is about becoming better. Where clinically
                            appropriate, we explore conservative rehabilitation options and work alongside medical
                            professionals whenever referral or medical management is needed.
                        </p>
                    </div>
                    <div className="story-goal-grid">
                        {recoveryGoals.map((goal) => (
                            <div className="story-goal" key={goal}><Check size={17} aria-hidden="true" /><span>{goal}</span></div>
                        ))}
                    </div>
                    <div className="story-section-heading story-capacity-note">
                        <p>We do not want patients to become dependent on treatment. We want to make them capable of managing their movement and health with confidence.</p>
                    </div>
                </div>
            </section>

            <section className="story-section story-more-section">
                <div className="story-container story-more-grid">
                    <div className="story-copy">
                        <span className="story-section-kicker story-more-kicker">More than pain relief</span>
                         <AnimatedText
                            headingLevel="h2"
                            animationType="fadeUp"
                            title="Look at the bigger picture."
                            titleClassName="story-section-title"
                            titleStyle={{
                                fontSize: 35,
                                color: '#100000',
                                paddingBottom: 5

                            }}
                        />
                        <p>
                            Pain is often the reason someone walks through our doors, but it is not always the
                            entire problem. Strength, mobility, motor control, load tolerance, movement behaviour,
                            fitness, recovery and confidence may also need attention.
                        </p>
                        <p>That is why our rehabilitation approach looks beyond the painful area.</p>
                    </div>
                    <div>
                        <ul className="story-question-list">
                            <li><span className="story-question-icon"><Target size={17} aria-hidden="true" /></span><span>What is limiting you?</span></li>
                            <li><span className="story-question-icon"><Target size={17} aria-hidden="true" /></span><span>What does your body need?</span></li>
                            <li><span className="story-question-icon"><Target size={17} aria-hidden="true" /></span><span>What can we improve?</span></li>
                            <li><span className="story-question-icon"><Target size={17} aria-hidden="true" /></span><span>What does your goal require?</span></li>
                            <li><span className="story-question-icon"><Target size={17} aria-hidden="true" /></span><span>How do we progressively get you there?</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="story-section story-difference-section">
                <div className="story-container">
                    <div className="story-section-heading">
                        <span className="story-section-kicker">What makes Movefit different</span>
                         <AnimatedText
                            headingLevel="h2"
                            animationType="typewriter"
                            title="Care that keeps your life in view."
                            titleClassName="story-section-title"
                            titleStyle={{
                                fontSize: 35,
                                color: '#100000',
                                paddingBottom: 10 

                            }}
                        />
                    </div>
                    <div className="story-difference-grid">
                        {differences.map((difference) => (
                            <article className="story-difference-card" key={difference.title}>
                                <span className="story-difference-number">”</span>
                                <h3>{difference.title}</h3>
                                <p>{difference.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="story-methodology" aria-label="Movefit rehabilitation method">
                <div className="story-container story-methodology-inner">
                    <div className="story-method-step step-1"><span>01</span>Assess</div>
                    <ArrowRight className="story-method-arrow arrow-1" size={19} aria-hidden="true" />
                    <div className="story-method-step step-2"><span>02</span>Educate</div>
                    <ArrowRight className="story-method-arrow arrow-2" size={19} aria-hidden="true" />
                    <div className="story-method-step step-3"><span>03</span>Rebuild</div>
                    <ArrowRight className="story-method-arrow arrow-3" size={19} aria-hidden="true" />
                    <div className="story-method-step step-4"><span>04</span>Perform</div>
                </div>
            </section>

            <section className="story-vision-section">
                <div className="story-container">
                    <div className="story-vision-card">
                        <span className="story-section-kicker">The Movefit vision</span>
                        <AnimatedText
                            headingLevel="h2"
                            animationType="slideRight"
                            title="A movement-focused community in Karur."
                            titleClassName="story-section-title"
                            titleStyle={{
                                fontSize: 30,
                                color: '#fcfcfc',
                                paddingBottom: 10 

                            }}
                        />
                        <p>
                            We want to build more than a clinic: a community where strength, movement, fitness,
                            recovery, prevention and consistency are part of everyday health. Our long-term vision
                            is to make quality physiotherapy and exercise-based rehabilitation a trusted part of
                            people&apos;s lives, not something they seek only after an injury.
                        </p>
                        <div className="story-community-values">
                            {['Strength', 'Movement', 'Fitness', 'Recovery', 'Prevention', 'Consistency'].map((value) => <span key={value}>{value}</span>)}
                        </div>
                        <blockquote className="story-vision-quote">
                            Success isn&apos;t when a patient finishes a treatment package. Success is when they return
                            to doing the things that matter to them.
                        </blockquote>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default OurStoryPage;
