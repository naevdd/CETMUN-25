export default function Team() {
  const Team = [
  { img: '/amina.jpg', name: 'Amina Jubair', role: 'Convenor' },
  { img: '/abhi.jpg', name: 'Abhimanyu Pradeep', role: 'Secretary General' },
  { img: '/avantika.jpg', name: 'Avantika Veenus', role: 'Deputy Secretary General' },
  { img: '/ephrem.jpg', name: 'Ephrem Mathews', role: 'Director General' },
  { img: '/denis.jpg', name: 'Denis George Joseph', role: "Chargé d affaires" },
  { img: '/naveed 1.jpg', name: 'Naveed Niaz', role: 'USG Marketing and Web' },
  { img: '/george.jpg', name: 'George J Mathews', role: 'USG Marketing' },
  { img: '/devika.jpg', name: 'Devika Vipin', role: 'USG Delegate Affairs' },
  { img: '/jan.jpg', name: 'Jan Joseph', role: 'USG Delegate Affairs' },
  { img: '/pridhu.jpg', name: 'Pridhu Raj R S', role: 'USG Design' },
  { img: '/yashnik 1.jpg', name: 'Yashnik', role: 'USG Logistics' },
  { img: '/akhila.jpg', name: 'Akhila', role: 'USG Socials' },
  { img: '/sruthy.jpg', name: 'Sruthy', role: 'USG Socials' },
  { img: '/akshay.jpg', name: 'Akshay', role: 'USG Dining and Cuisine' },
  { img: '/roopesh.jpg', name: 'Roopesh', role: 'USG Dining and Cuisine' },
  { img: '/allan.jpg', name: 'Allan Mathew', role: 'USG Finance' },
  { img: '/gauri1.jpg', name: 'Gauri G', role: 'USG Young Talent and Equity' },
  { img: '/gauri2 1.jpg', name: 'Gauri J', role: 'USG Young Talent and Equity' },
  { img: '/devanandana.jpg', name: 'Devanandana', role: 'USG Content' },
  { img: '/bharath.jpg', name: 'Bharath', role: 'USG Media' },
  { img: '/goutham.jpg', name: 'Goutham', role: 'USG Media' },
  { img: '/dhruv 1.jpg', name: 'Dhruv', role: 'USG Sponsorship' },
  { img: '/yamin.jpg', name: 'Yamin', role: 'USG Sponsorship' },
  { img: '/sonali.jpg', name: 'Sonali', role: 'USG Hospitality' },
  { img: '/dheeraj.jpg', name: 'Dheeraj', role: 'USG Hospitality' }
];



  return (
    <div id="committee" className="bg-radial font-seasons_r from-foreground to-background pb-30 min-h-screen">
      <h1
        className="sm:text-6xl px-10 text-5xl text-gradient text-center pt-40 font-seasons_b"
      >
        ORGANIZING COMMITTEE
      </h1>

      <div className="sm:grid sm:grid-cols-3 flex flex-col sm:mx-40 mx-14 mt-30 gap-24">
        {Team.map((member, idx) => (
          <div
            key={idx}
            className="rounded-2xl pb-10 px-10 pt-5 shadow-xl shadow-black transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"
          >
            <img src={member.img} className="mx-auto rounded-3xl" />
            <p className="text-white text-xl text-center mt-10">{member.name}</p>
            <p className="text-gradient text-xl text-center mt-10">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
