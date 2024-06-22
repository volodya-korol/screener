import { CandyBomb } from "@/components/CandyBomb";

export default function Home() {
	return (
		<div className="p-4" onClick={() => fetch("/api/candybomb")}>
			<CandyBomb />
		</div>
	);
}
