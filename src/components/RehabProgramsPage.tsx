import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, MapPin, Target } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import programs from '../constants/rehabPrograms.constants';
import { AnimatedText } from './AnimatedText';

const RehabProgramsPage: React.FC = () => {
	const [selectedProgramId, setSelectedProgramId] = useState(programs[0].id);
	const activeProgramRef = useRef<HTMLDivElement>(null);
	const selectedProgram = programs.find((program) => program.id === selectedProgramId) ?? programs[0];

	const selectProgram = (programId: string) => {
		setSelectedProgramId(programId);

		if (window.matchMedia('(max-width: 900px)').matches) {
			window.requestAnimationFrame(() => {
				activeProgramRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			});
		}
	};

	return (
		<div className="mf-programs-page">
			<Header />
			<main>
				<section className="mf-programs-hero">
					<span className="mf-programs-eyebrow">MoveFit Performance & Fitness</span>
					<AnimatedText
						title="Train With Purpose. Progress With a Plan."
						animationType="fadeUp"
						animateOnMount
						headingLevel="h1"
						align="center"
						titleClassName="mf-programs-title"
						titleStyle={{
							color: '#f5f6f9',
							fontSize: 'clamp(28px, 4vw, 42px)',
							fontWeight: 800,
							lineHeight: 1.06,
							margin: '10px 0 12px',
						}}
					/>
					<p>From your first workout to your next level, structured training designed around your body, your goals and your lifestyle.</p>
				</section>

				<section className="mf-programs-shell" aria-label="MoveFit programs">
					<div className="mf-programs-layout">
						<aside className="mf-program-track" aria-label="Select a training program">
							<div className="mf-program-track-heading"><span>Find your track</span><small>06 programs</small></div>
							<nav className="mf-program-track-list" aria-label="Programs">
								{programs.map((program, index) => (
									<button
										type="button"
										key={program.id}
										className={`mf-program-track-button ${selectedProgramId === program.id ? 'active' : ''}`}
										aria-pressed={selectedProgramId === program.id}
										onClick={() => selectProgram(program.id)}
									>
										<span className="mf-program-track-index">{String(index + 1).padStart(2, '0')}</span>
										<span className="mf-program-track-label"><strong>{program.title}</strong><small>{program.category}</small></span>
										<ArrowUpRight className="mf-program-track-arrow" size={17} aria-hidden="true" />
									</button>
								))}
							</nav>
						</aside>

						<div className="mf-active-program" ref={activeProgramRef}>
							<AnimatePresence mode="wait" initial={false}>
								<motion.div
									className="mf-active-program-content"
									key={selectedProgram.id}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -8 }}
									transition={{ duration: 0.2 }}
								>
									<article className="mf-program-hero-card">
										<img src={selectedProgram.image} alt="" />
										<div className="mf-program-hero-shade" />
										<div className="mf-program-stats">
											<span><Target size={14} aria-hidden="true" /><small>Focus</small><strong>{selectedProgram.focus}</strong></span>
											<span><MapPin size={14} aria-hidden="true" /><small>Format</small><strong>{selectedProgram.format}</strong></span>
										</div>
										<div className="mf-program-hero-copy">
											<span className="mf-program-category">{selectedProgram.category}</span>
											<h2>{selectedProgram.title}</h2>
											<h3>{selectedProgram.tagline}</h3>
											<p>{selectedProgram.description}</p>
										</div>
									</article>

									<div className="mf-program-detail-grid">
										<section className="mf-program-panel">
											<div className="mf-program-panel-heading"><span>01</span><h3>What We Do</h3></div>
											<ul className="mf-program-activities">
												{selectedProgram.activities.map((activity) => {
													const labelEnd = activity.indexOf(':');

													return (
														<li key={activity}>
															<Check size={16} aria-hidden="true" />
															<span>
																{labelEnd === -1 ? activity : <><strong>{activity.slice(0, labelEnd + 1)}</strong>{activity.slice(labelEnd + 1)}</>}
															</span>
														</li>
													);
												})}
											</ul>
										</section>
										<section className="mf-program-panel">
											<div className="mf-program-panel-heading"><span>02</span><h3>Who Is It For?</h3></div>
											<p className="mf-program-panel-intro">A good fit if you&apos;re:</p>
											<ul className="mf-program-audiences">
												{selectedProgram.audiences.map((audience) => <li key={audience}>{audience}</li>)}
											</ul>
										</section>
									</div>

									<section className="mf-program-outcome">
										<div className="mf-program-outcomes-list">
											<span className="mf-program-outcome-label">What You Get</span>
											<ul>{selectedProgram.outcomes.map((outcome) => <li key={outcome}><Check size={14} aria-hidden="true" /><span>{outcome}</span></li>)}</ul>
										</div>
										<blockquote><span className="mf-program-outcome-label">The Goal</span><p>“{selectedProgram.goal}”</p></blockquote>
									</section>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default RehabProgramsPage;
