import Footer from "../components/Footer";
import ContributionGraph from "../components/ContributionGraph";

export default function Home() {
  return (
    <>
      <section className="max-container">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Haridas Pawar
          </span>
        </h1>
        <p className="text-lg mt-10 text-gray-700 text-justify leading-relaxed mb-4">
          A passionate <b>Full Stack Developer</b> with expertise in modern web
          technologies. I love creating innovative solutions and turning ideas
          into reality through clean, efficient code. Always eager to learn new
          technologies and take on challenging projects.
        </p>

        {/* GitHub Contribution Calendar */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            My GitHub Contributions
          </h2>
          <ContributionGraph />
        </div>
      </section>
      <Footer />
    </>
  );
}
