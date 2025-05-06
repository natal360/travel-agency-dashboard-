import { Header } from "~/components"


const Dashboard = () => {
  const user = {name: 'Natal360'}

  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description="Track activity, trends and popular estinations in real time"
      />

      Dashboard Page Contents
    </main>
  )
}

export default Dashboard