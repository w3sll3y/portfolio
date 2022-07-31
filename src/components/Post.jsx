import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/w3sll3y.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Wesley Fernandes</strong>
            <span>Web Develop</span>
            <time title='11 de maio as 11:11h' dateTime='2022-05-11 06:11:11'>fernandess.weslley@gmail.com</time>
          </div>
        </div>

      </header>

      <div className={styles.content}>
        <p>Hii there 👋! </p>
        <p>I'm Wesley, and currently i work with QA, and i work with tests in mobile, android and iOS, and my free time, i job with fullstack web develop.</p>
        <p>Next a little about my experience and skills 🚀</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Professional Experience</strong>
      </form>

      <div className={styles.commentList}>
        <Comment
          title='COREBIZ - QA'
          time='April/22 - Currently'
          description="Responsible for carrying out test cases and adjustments in the deployment processes
          Initially, responsible for test cases in a project's tasks, and documenting the testing processes.
          Write BDDs inside task cards.
          Implementing and analyzing the branches that were in approval and in production, following GitFlow."
        />
        <Comment
          author={false}
          title='TALLOS -  QA'
          time='June/21 - Abr 22'
          description="Responsible for the test team in the company.
          Start of automated tests using Cypress on the company's main application, and leading the team that was also
          participating in the automation.
          Manual tests, white box tests, test case documentation, BDD. Responsible for releasing the Changelogs of updates on the
          platform. Perform rollback tests in approval.
          Analyze the branches that were in approval and in production, following GitFlow."
        />
        <Comment
          author={false}
          title='TALLOS - Develop'
          time='February/21 - July/21'
          description="Development with technologies: VueJS, NodeJS, MongoDB, Express. Performed updates on a company administration
          system with these technologies."
        />
      </div>

      <form className={styles.commentForm}>
        <strong>Knowledge Areas</strong>
      </form>
      <Comment
        srcImage='https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        title='Software Quality Assurance'
        description='Tests cases  ▪ Documentation ▪ GIT ▪ GitFlow ▪ K6 ▪ Selenium ▪ Cypress ▪ SonarQube ▪ SCRUM ▪ Jira'
      />
      <Comment
        author={false}
        title='Develop'
        description='HTML5 ▪ CSS3 ▪ Javascript ▪ Typescript ▪ VueJS ▪ ReactJS ▪ 
        NodeJs ▪ Express ▪ MongoDB'
      />
      <Comment
        author={false}
        title='DevOps'
        description='Docker ▪ K6 ▪ JMeter'
      />
    </article>
  )
}