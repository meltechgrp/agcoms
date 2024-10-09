import { getSiteJob } from '@/lib/get-jobs';
import { IFilters, IJob } from '@/type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JobState {
	jobs: IJob[];
	job: IJob | null;
	filtered: IJob[];
	lastFetched: string | null;
	fetchJobs: () => Promise<void>;
	fetchJob: (id: string) => void;
	filterJobs: ({ title, locations }: IFilters) => void;
}

const useJobStore = create<JobState>()(
	persist(
		(set, get) => ({
			jobs: [],
			filtered: [],
			job: null,
			lastFetched: null,
			fetchJobs: async () => {
				try {
					const jobs: IJob[] = await getSiteJob();
					set({
						jobs,
						filtered: jobs.reverse().slice(0, 15),
						job: jobs[0],
						lastFetched: new Date().toISOString(),
					});
				} catch (error) {
					console.error('Error fetching jobs: ', error);
				}
			},
			fetchJob: (id) => {
				const { jobs } = get();
				const job = jobs.find(({ id: i }) => i === id);
				set({
					job,
				});
			},
			filterJobs: ({ title, locations }) => {
				const { jobs } = get();
				const filtered = jobs.filter(
					(job) =>
						job.title.toLowerCase().includes(title.toLowerCase()) &&
						locations.includes(job.locations)
				);
				set({
					filtered,
				});
			},
		}),
		{
			name: 'job-storage',
			partialize: (state) => ({
				jobs: state.jobs,
				job: state.job,
				lastFetched: state.lastFetched,
			}),
		}
	)
);

export default useJobStore;
