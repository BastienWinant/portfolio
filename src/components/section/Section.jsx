import clsx from 'clsx';

export default function Section({ref, className, children}) {
	const classes = clsx('section', className)
	return (
		<section className={classes} ref={ref}>
			{children}
		</section>
	)
}