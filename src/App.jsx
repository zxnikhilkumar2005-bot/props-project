import Card from './components/Card'

const App = () => {
  const openings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 62,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/27/1/apple-logo-png_seeklogo-272825.png",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 77,
      location: "Delhi, India"
    },
    {
      brandLogo: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 90,
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8hijur6o0wCE5EJ-F8tDHJjYcA8uvvB2KQ&s",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55,
      location: "Noida, India"
    },
    {
      brandLogo: "https://thumbs.dreamstime.com/b/humpolec-czech-republic-october-20-2023-tesla-automobile-company-car-icon-vector-illustration-295472297.jpg ",
      companyName: "Tesla",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 70,
      location: "Austin, USA"
    },
    {
      brandLogo: "https://cdn-icons-png.freepik.com/512/5969/5969217.png",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 95,
      location: "Pune, India"
    },
    {
      brandLogo: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMi5wbmc.png",
      companyName: "Spotify",
      datePosted: "3 weeks ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 60,
      location: "Stockholm, Sweden"
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5436/5436922.png",
      companyName: "Adobe",
      datePosted: "12 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 48,
      location: "Bangalore, India"
    }
  ]
  return (
    <div className='parent' >
      {openings.map(function (elem,idex) {
        return <div key={idex}>
          <Card
          company={elem.companyName}
          post={elem.post}
          tag1={elem.tag1}
          datePosted={elem.datePosted}
          pay={elem.pay}
          brandLogo={elem.brandLogo}
          tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App
