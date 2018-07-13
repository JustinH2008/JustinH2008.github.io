import React from 'react'
import './Main.css'

function projects() {
  return (
    <div className="center">
      <h2> Projects I am working on!</h2>

      <p>
        Currently I am working on implimenting a major project to solve personal issues.
        <br />
        Once completed I will have a central hub of web applications which will include the following:
        <br />
        <ul>
          <li>Applications</li>
          <li>Finances</li>
          <li>Bookmarks</li>
          <li>Network Monitroing</li>
          <li>Tools</li>
        </ul>
      </p>

      <p>
        Applications tab will hold an array of applications as I design them.
        <br />
        Finances tab will include current banking information, and host when bils are needing to be paid. - Still determing how this will be used.
        <br />
        Bookmarks tab will be a central hub of organized bookmarks for all of my work and personal bookmarks that I use.
        <br />
        Network Monitroing tab will host network testing tools/web applications and data of current network statistics.
        <br />
        Tools tab will be a link for useful tools that will be used. - May be redundant depending on how I use the Applications tab.
      </p>
      <p>
        This will be my biggest central hub web application, I also am working on a text reminder application that sends emails via text to my phone for when birthdays and events are coming up. I have the primary application built, I am just working on database intagration and determining the scope of how I want the application to work.
      </p>
    </div>
  )
}

export default projects
