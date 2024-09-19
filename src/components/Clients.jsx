import { clients } from "../constants";
import styles from "../style";

export const Clients = () => (
  <section className={`${styles.flexCenter} mb-8`}>
  <div className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((client) => (
      <div 
        key={client.id} 
        className={`flex ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] w-full sm:w-auto p-4 mr-6 ml-6`}
      >
        <img 
          src={client.logo} 
          alt="client" 
          className="sm:w-[192px] w-[100px] object-contain client-logo" 
        />
      </div>
    ))}
  </div>
</section>

)
export default Clients