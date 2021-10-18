import fakeTrends from "mocks/trends";
import Trend from "./Trend";

const Trending = () => {
  const trends = fakeTrends
    .sort((a, b) => b.quak_volume - a.quak_volume)
    .slice(0, 6);
  return (
    <section className="trending">
      <h2 className="trending__header">Trending</h2>
      {trends.map((trend, index) => (
        <Trend trend={trend} index={index + 1} key={index} />
      ))}
      <button className="trending__more">See more</button>
    </section>
  );
};

export default Trending;
