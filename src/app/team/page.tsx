export default function Team() {
  const Team = [
  { img: '/abhi.jpg', name: 'Abhimanyu', role: 'Secretary General' },
  { img: '/akshay.jpg', name: 'Akshay', role: 'USG' },
  { img: '/allan.jpg', name: 'Allan', role: 'USG' },
  { img: '/avantika.jpg', name: 'Avantika', role: 'USG' },
  { img: '/bharath.jpg', name: 'Bharath', role: 'USG' },
  { img: '/denis.jpg', name: 'Denis', role: 'USG' },
  { img: '/devanandana.jpg', name: 'Devanandana', role: 'USG' },
  { img: '/devika.jpg', name: 'Devika', role: 'USG' },
  { img: '/dheeraj.jpg', name: 'Dheeraj', role: 'USG' },
  { img: '/ephrem.jpg', name: 'Ephrem', role: 'USG' },
  { img: '/gauri1.jpg', name: 'Gauri', role: 'USG' },
  { img: '/gauri2.jpg', name: 'Gauri S', role: 'USG' },
  { img: '/george.jpg', name: 'George', role: 'USG' },
  { img: '/goutham.jpg', name: 'Goutham', role: 'USG' },
  { img: '/pridhu.jpg', name: 'Pridhu', role: 'USG' },
  { img: '/roopesh.jpg', name: 'Roopesh', role: 'USG' },
  { img: '/sonali.jpg', name: 'Sonali', role: 'USG' },
  { img: '/sruthy.jpg', name: 'Sruthy', role: 'USG' },
  { img: '/yamin.jpg', name: 'Yamin', role: 'USG' },
  { img: '/yashnik.jpg', name: 'Yashnik', role: 'USG' },
  { img: '/juan.jpg', name: 'Juan', role: 'USG' },
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
            className="rounded-2xl pb-15 px-15 pt-5 shadow-xl shadow-black transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"
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
