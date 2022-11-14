import styles from "../styles/EandE.module.scss";
import { Text, Timeline } from "@mantine/core";
import { Book2, Briefcase, Building } from "tabler-icons-react";
function EandE() {
	return (
		<div className={styles.eandeContainer}>
			<h1 className="title">Experience and Education</h1>
			<div className={styles.timelineContainer}>
				<Timeline lineWidth={3} radius="md">
					<Timeline.Item
						title="Master of Applied Computing"
						bulletSize={50}
						bullet={<Book2 size={25} />}
						className={styles.timelineItem}
					>
						<Text color="dimmed" size="md">
							University of Windsor
						</Text>
						<Text size="md" mt={4}>
							May 2022 - Present
						</Text>
					</Timeline.Item>

					<Timeline.Item
						title="Web Development Trainee"
						bulletSize={50}
						bullet={<Building size={25} />}
						className={styles.timelineItem}
					>
						<Text color="dimmed" size="md">
							Pepcoding
						</Text>
						<Text size="md" mt={4}>
							Sept 2021 – Feb 2022
						</Text>
					</Timeline.Item>

					<Timeline.Item
						title="Bachelor of Technology in Computer Science and Engineering"
						bulletSize={50}
						bullet={<Book2 size={25} />}
						className={styles.timelineItem}
					>
						<Text color="dimmed" size="md">
							Gujarat Technological University
						</Text>
						<Text size="md" mt={4}>
							Aug 2017 – Aug 2021
						</Text>
					</Timeline.Item>
				</Timeline>
			</div>
		</div>
	);
}

export default EandE;
