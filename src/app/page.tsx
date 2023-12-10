import gridStyles from '@/app/styles/Main.module.scss';

export default function Home() {
  return (
    <main className={`${gridStyles.oneCol} ${gridStyles.container}`}>
      <div>
        <h1>Welcome to the Private Road Members Association</h1>
        <img src="/placeholder.jpg"></img>
        <p>The Private Road Members Association (which also covers Victoria Crescent, Fairlawn Place and Yew Close) exists to help members by providing a safe, clean road infrastructure kept in good repair.</p>
        <p>As members will be aware, the roads and pavements in the area covered by the Association are unadopted. The work of the Association not only helps all members to come and go without worry, it also makes a contribution to maintaining the value of each and every property in the community.</p>      
      </div>
    </main>
  )
}