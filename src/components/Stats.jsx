import { stats } from "../constants";
import styles from "../style";

export const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
  {stats.map((stat) => (
    <div 
      key={stat.id} 
      className="flex flex-row items-center mx-14 sm:py-4 sm:px-6 py-2 px-3 text-center"
    >
      <h4 className="font-poppins font-semibold text-[30px] leading-[43px] text-white">
        {stat.value}
      </h4>
      <p className="font-poppins font-normal text-[15px] leading-[21px] text-gradient uppercase ml-3 whitespace-nowrap">
        {stat.title}
      </p>
    </div>
  ))}
</section>





)

export default Stats