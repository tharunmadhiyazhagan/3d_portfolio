// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
//   >
//     <p className="text-white font-black text-[48px]">"</p>

//     <div className="mt-1">
//       <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

//       <div className="mt-7 flex justify-between items-center gap-1">
//         <div className="flex-1 flex flex-col">
//           <p className="text-white font-medium text-[16px]">
//             <span className="blue-text-gradient">@</span> {name}
//           </p>
//           <p className="mt-1 text-secondary text-[12px]">
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className="w-10 h-10 rounded-full object-cover"
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { publications } from "../constants"; // Corrected import statement

// const PublicationCard = ({ index, title, year, publication, url, image }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
//   >
//     <div className="mt-1">
//       <p className="text-white tracking-wider text-[18px]">{title}</p>
//       <p className="text-secondary text-[14px] mt-2">
//         {publication} - {year}
//       </p>
//       <a
//         href={url}
//         className="text-blue-500 mt-2 inline-block"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Read More
//       </a>

//       <div className="mt-7 flex justify-between items-center gap-1">
//         {image && (
//           <img
//             src={image}
//             alt={`publication-${title}`}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//         )}
//       </div>
//     </div>
//   </motion.div>
// );

const PublicationCard = ({ index, title, year, publication, url, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* Title */}
    <h3 className="text-white font-bold text-[24px] mb-4">{title}</h3>

    {/* Image */}
    <div className="relative w-full h-[230px] rounded-3xl overflow-hidden mb-4">
      <img
        src={image}
        alt={`publication-${title}`}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>{" "}
      {/* Semi-transparent overlay */}
    </div>

    {/* Publication Name */}
    <p className="text-secondary text-[14px] mb-1">{publication}</p>

    {/* Year */}
    <p className="text-secondary text-[14px] mb-4">{year}</p>

    {/* Read More Link */}
    <a
      href={url}
      className="text-blue-500 mt-2 inline-block"
      target="_blank"
      rel="noopener noreferrer"
    >
      Dive into the publication
    </a>
  </motion.div>
);

const Publications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Research Papers</p>
          <h2 className={styles.sectionHeadText}>Publications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {publications.map((publication, index) => (
          <PublicationCard
            key={publication.title}
            index={index}
            {...publication}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Publications, "");
