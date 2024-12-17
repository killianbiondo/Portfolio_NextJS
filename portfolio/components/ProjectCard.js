import Image from 'next/image';

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <Image src={project.image} alt={project.title} width={300} height={200} />
            <h2>{project.title}</h2>
        </div>
    );
}
