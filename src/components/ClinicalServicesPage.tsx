import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Layers, LayoutGrid, MessageCircle, PhoneCall } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import AnimatedText from './AnimatedText';
import type { ClinicalService, CategoryKey, ViewMode } from '../types/clinicalServices.types';
import { SERVICES, FILTERS, WHATSAPP_PHONE, getWhatsAppUrl, assessmentSteps, carePrinciples } from '../constants/clinicalServices.constants';

export const ClinicalServicesPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<CategoryKey | 'all'>('all');
    const [viewMode, setViewMode] = useState<ViewMode>('matrix');
    const [activeServiceId, setActiveServiceId] = useState('08');
    const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);
    const [questions, setQuestions] = useState<Record<string, string>>({});
    const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const filterScrollRef = useRef<HTMLDivElement>(null);
    const showcaseFeatureRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const container = filterScrollRef.current;
        if (!container) return;

        const updateScrollEdges = () => {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 5);
        };

        updateScrollEdges();
        container.addEventListener('scroll', updateScrollEdges, { passive: true });
        window.addEventListener('resize', updateScrollEdges);

        return () => {
            container.removeEventListener('scroll', updateScrollEdges);
            window.removeEventListener('resize', updateScrollEdges);
        };
    }, []);

    const visibleServices = SERVICES.filter((service) => activeFilter === 'all' || service.categoryKey === activeFilter);
    const featuredService = visibleServices.find((service) => service.id === activeServiceId) ?? visibleServices[0];

    const updateQuestion = (id: string, value: string) => {
        setQuestions((current) => ({ ...current, [id]: value }));
    };

    const sendQuestion = (service: ClinicalService) => {
        window.open(getWhatsAppUrl(service, questions[service.id] ?? ''), '_blank', 'noopener,noreferrer');
        setOpenQuestionId(null);
    };

    const scrollCategories = (direction: -1 | 1) => {
        filterScrollRef.current?.scrollBy({ left: 150 * direction, behavior: 'smooth' });
    };

    const selectShowcaseService = (serviceId: string) => {
        setActiveServiceId(serviceId);

        if (window.matchMedia('(max-width: 760px)').matches) {
            window.requestAnimationFrame(() => {
                showcaseFeatureRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    };

    const toggleDescription = (serviceId: string) => {
        setExpandedDescriptions((current) => ({
            ...current,
            [serviceId]: !current[serviceId],
        }));
    };

    const renderDescription = (service: ClinicalService) => {
        const isExpanded = !!expandedDescriptions[service.id];
        const hasExpandableContent = Boolean(service.detailsHeading && service.details?.length);

        return (

            <div className="mf-service-description">
                <p className={`mf-service-description-text ${hasExpandableContent && !isExpanded ? 'is-clamped' : ''}`}>{service.desc}</p>
                {hasExpandableContent && (
                    <>
                        {!isExpanded && (
                            <button
                                type="button"
                                className="read-more-btn"
                                aria-expanded={false}
                                aria-controls={`service-details-${service.id}`}
                                onClick={() => toggleDescription(service.id)}
                            >
                                Read more...
                            </button>
                        )}
                        <div
                            id={`service-details-${service.id}`}
                            className={`card-expanded-content ${isExpanded ? 'is-open' : ''}`}
                            aria-hidden={!isExpanded}
                        >
                            <div className="card-expanded-content-inner">
                                <div className="mf-service-details">
                                    <strong>{service.detailsHeading}</strong>
                                    <ul>
                                        {service.details?.map((detail, index) => (
                                            <li key={detail}>
                                                {detail}
                                                {isExpanded && service.details && index === service.details.length - 1 && (
                                                    <>
                                                        {' '}
                                                        <button
                                                            type="button"
                                                            className="read-more-btn"
                                                            aria-expanded={true}
                                                            aria-controls={`service-details-${service.id}`}
                                                            onClick={() => toggleDescription(service.id)}
                                                        >
                                                            Read less
                                                        </button>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    };

    const renderInquiry = (service: ClinicalService) => (
        <AnimatePresence initial={false}>
            {openQuestionId === service.id && (
                <motion.div className="mf-question-drawer" initial={{ opacity: 0, height: 0, y: -6 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: -6 }} transition={{ duration: 0.2 }}>
                    <label className="visually-hidden" htmlFor={`question-${service.id}`}>Your question about {service.title}</label>
                    <textarea id={`question-${service.id}`} value={questions[service.id] ?? ''} onChange={(event) => updateQuestion(service.id, event.target.value)} placeholder="Type your query or symptom here..." rows={3} />
                    <div className="mf-question-actions">
                        <button type="button" className="mf-cancel-button" onClick={() => setOpenQuestionId(null)}>Cancel</button>
                        <button type="button" className="mf-send-button" onClick={() => sendQuestion(service)}>Send to WhatsApp 💬</button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    const renderCard = (service: ClinicalService, index: number) => (
        <motion.article key={service.id} className={`mf-service-card side-${service.side} ${service.side === 'center' ? 'is-featured' : ''}`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: Math.min(index * 0.025, 0.2) }}>
            <div className="mf-card-image">
                <img src={service.img} alt="" loading="lazy" />
                <div className="mf-card-image-shade" />
                <span className="mf-id-badge">{service.id}</span>
                <span className="mf-category-badge">{service.category}</span>
                {service.imageBadge && <span className="mf-care-badge">{service.imageBadge}</span>}
            </div>
            <div className="mf-card-content">
                <h3>{service.title}</h3>
                {renderDescription(service)}
                <button type="button" className="mf-inquiry-trigger" aria-expanded={openQuestionId === service.id} onClick={() => setOpenQuestionId((current) => current === service.id ? null : service.id)}>
                    <span>Feel free to ask doubts</span><span aria-hidden="true">→</span>
                </button>
                {renderInquiry(service)}
            </div>
        </motion.article>
    );

    return (
        <div className="mf-clinical-page">
            <Header />
            <main className="mf-clinical-main">
                <section className="mf-clinical-section" aria-label="MoveFit Care Pathways">
                    <header className="mf-clinical-heading">
                        <AnimatedText
                            title="MoveFit Care Pathways"
                            animationType="fadeUp"
                            animateOnMount
                            headingLevel="h1"
                            align="center"
                            titleClassName="mf-clinical-title"
                            titleStyle={{
                                color: '#111827',
                                fontSize: 'clamp(28px, 4vw, 46px)',
                                fontWeight: 800,
                                lineHeight: 1.06,
                                margin: '10px 0 12px',
                            }}
                        />
                        <p>Expert physiotherapy and movement care, shaped around your recovery and goals.</p>
                    </header>

                    {/* <PainManagementSection /> */}
                    <section className="mf-pain-management" aria-labelledby="mf-pain-management-title">
                        <div className="mf-pain-copy">
                            <span className="mf-pain-badge">Pain Management</span>
                            <AnimatedText
                                headingLevel="h2"
                                animationType="elasticPop"
                                title="Pain shouldn’t decide what you can and cannot do."
                                titleClassName="mf-clinical-title"
                                titleStyle={{
                                    fontSize: 30,
                                    color: '#fcfcfc',
                                    paddingBottom: 10,

                                }}
                            />
                            <p>
                                We look beyond the painful area to understand how you move, what is limiting you and what
                                your body needs to recover. From everyday pain and sports injuries to post-surgical rehab,
                                strength training and senior wellness, we help you rebuild capacity and return to what matters.
                            </p>
                            <h3>Pain Is a Signal. Your Movement Is the Bigger Picture.</h3>
                            <p>
                                Pain is one part of the problem. We identify the factors affecting your movement and
                                gradually improve your body&apos;s capacity, rather than simply treating the painful area.
                            </p>
                            <p className="mf-pain-promise-intro">Your rehabilitation is built around you.</p>
                            <ul className="mf-pain-principles">
                                {carePrinciples.map((principle) => (
                                    <li key={principle}>
                                        <Check size={15} aria-hidden="true" />
                                        <span>{principle}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mf-pain-features" aria-label="Our rehabilitation assessment stages">
                            {assessmentSteps.map((step, index) => (
                                <article className="mf-pain-feature" key={step.title}>
                                    <span className="mf-pain-feature-number">{String(index + 1).padStart(2, '0')}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <div className="mf-control-bar">
                        <div className={`mf-filter-wrap ${canScrollRight ? 'has-right-overflow' : ''}`}>
                            <div className="mf-filter-scroll" ref={filterScrollRef} role="tablist" aria-label="Filter clinical services">
                                {FILTERS.map((filter) => (
                                    <button key={filter.key} type="button" role="tab" aria-selected={activeFilter === filter.key} className={`mf-filter-pill ${activeFilter === filter.key ? 'active' : ''}`} onClick={() => setActiveFilter(filter.key)}>
                                        {filter.label}{filter.key === 'all' && <span className="mf-filter-count">15</span>}
                                    </button>
                                ))}
                            </div>
                            {canScrollLeft && (
                                <button type="button" className="mf-filter-arrow mf-filter-arrow-left" aria-label="Scroll to previous service categories" onClick={() => scrollCategories(-1)}>
                                    ‹
                                </button>
                            )}
                            {canScrollRight && (
                                <button type="button" className="mf-filter-arrow mf-filter-arrow-right" aria-label="Scroll to more service categories" onClick={() => scrollCategories(1)}>
                                    ›
                                </button>
                            )}
                        </div>
                        <div className="mf-view-switch" role="group" aria-label="Service display mode">
                            <button type="button" className={viewMode === 'showcase' ? 'active' : ''} aria-pressed={viewMode === 'showcase'} onClick={() => setViewMode('showcase')}>
                                <Layers size={16} aria-hidden="true" /><span>Showcase Studio</span>
                            </button>
                            <button type="button" className={viewMode === 'matrix' ? 'active' : ''} aria-pressed={viewMode === 'matrix'} onClick={() => setViewMode('matrix')}>
                                <LayoutGrid size={16} aria-hidden="true" /><span>Bento Matrix</span>
                            </button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait" initial={false}>
                        {viewMode === 'matrix' ? (
                            <motion.div key={`matrix-${activeFilter}`} className="mf-service-grid" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                                {visibleServices.map(renderCard)}
                            </motion.div>
                        ) : (
                            <motion.div key="showcase" className="mf-showcase-layout" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                                <article ref={showcaseFeatureRef} className={`mf-showcase-feature side-${featuredService.side}`}>
                                    <div className="mf-showcase-image">
                                        <img src={featuredService.img} alt="" />
                                        <div className="mf-card-image-shade" />
                                        <span className="mf-id-badge">{featuredService.id}</span>
                                        <span className="mf-category-badge">{featuredService.category}</span>
                                        {featuredService.imageBadge && <span className="mf-care-badge">{featuredService.imageBadge}</span>}
                                    </div>
                                    <div className="mf-showcase-content">
                                        <span className="mf-showcase-eyebrow">{featuredService.category}</span>
                                        <h2>{featuredService.title}</h2>
                                        {renderDescription(featuredService)}
                                        <button type="button" className="mf-inquiry-trigger" aria-expanded={openQuestionId === featuredService.id} onClick={() => setOpenQuestionId((current) => current === featuredService.id ? null : featuredService.id)}>
                                            <span>Feel free to ask doubts</span><span aria-hidden="true">→</span>
                                        </button>
                                        {renderInquiry(featuredService)}
                                    </div>
                                </article>
                                <aside className="mf-showcase-list" aria-label="All clinical services">
                                    {FILTERS.filter((filter) => filter.key !== 'all' && visibleServices.some((service) => service.categoryKey === filter.key)).map((filter) => (
                                        <section className="mf-list-group" key={filter.key}>
                                            <h3>{filter.label}</h3>
                                            {visibleServices.filter((service) => service.categoryKey === filter.key).map((service) => (
                                                <button type="button" key={service.id} className={`mf-list-service ${activeServiceId === service.id ? 'active' : ''}`} aria-pressed={activeServiceId === service.id} onClick={() => selectShowcaseService(service.id)}>
                                                    <span className="mf-list-number">{service.id}</span><span>{service.title}</span><span className="mf-list-arrow" aria-hidden="true">→</span>
                                                </button>
                                            ))}
                                        </section>
                                    ))}
                                </aside>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
                <section className="mf-condition-cta-wrap" aria-label="Contact MoveFit about another condition">
                    <div className="mf-condition-cta">
                        <div className="mf-condition-cta-copy">
                            <span className="mf-condition-cta-icon" aria-hidden="true"><PhoneCall size={22} color="#d32f2f" /></span>
                            <div>
                                <h2>Have a specific condition not listed above?</h2>
                                <p>Message to our head physiotherapist directly.</p>
                            </div>
                        </div>
                        <a className="mf-condition-cta-button" href={`https://wa.me/91${WHATSAPP_PHONE}`} target="_blank" rel="noopener noreferrer">
                            <MessageCircle size={20} aria-hidden="true" />
                            <span>Chat on WhatsApp (+91 {WHATSAPP_PHONE})</span>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ClinicalServicesPage;
