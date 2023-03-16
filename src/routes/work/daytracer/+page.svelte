<script>
  import ListDescription from '../../../lib/components/ListDescription.svelte';
  import Space from '../../../lib/components/Space.svelte';
  import pic1 from '../../../static/daytracer/april-20-2022.png';
  import pic2 from '../../../static/daytracer/july-9-2022.png';
  import pic3 from '../../../static/daytracer/march-16-2023.png';
</script>

<h1>Daytracer.app</h1>

<p>
  I've been working on this desktop app since April 2022 and now its
  March 2023 (about a year). I built the first prototype over a
  weekend which was a simple electron app that stored app usage as
  timestamps into a json file. Over time it grew into a calendar
  weekly view with projects for time assignment.
</p>

<Space height={1} />

<h4>Tech stack</h4>
<h5>Electron App node process (part 1)</h5>
<ul>
  <ListDescription
    title="Node.js"
    description="for creating log txt files for debugging"
  />
  <ListDescription
    title="Electron with Electron-Builder"
    description="for packaging into an installer and handling updates"
  />
  <ListDescription
    title="LowDB"
    description="for storing local data like auth
  tokens, settings in a JSON file"
  />

  <ListDescription
    title="Pocketbase DB in Electron"
    description="for storing data in a relational way
  (SQLite) like time_spent records, project_time records by device
  and user"
  />
</ul>

<h5>Electron App view (part 2)</h5>
<ul>
  <ListDescription
    title="React.js"
    description="for creating an interactive UI"
  />
  <ListDescription
    title="Styled Components"
    description="for creating CSS styles in the same file as
  the react components for better developer experience"
  />
  <ListDescription
    title="React Context"
    description="for shared global state such as AuthUser,
  Projects, TimeSpent"
  />
</ul>

<h5>Cloud Infrastructure (part 3)</h5>
<ul>
  <ListDescription
    title="AWS S3 buckets"
    description="for storing each version release used for
  downloading and updating desktop application"
  />

  <ListDescription
    title="Pocketbase DB in EC2"
    description="for storing user data in the cloud to allow
    for syncing across multiple devices"
  />
  <ListDescription
    title="AWS EC2 Instance + EBS"
    description="for hosting cloud Pocketbase server and its
    saved in the Elastic Block Storage"
  />

  <p>
    Pocketbase hosted on EC2 can only scale vertically, but I went
    with this solution for now because its simple and makes for a
    great dev experience as I can run the same cloud env locally on my
    computer.
  </p>
</ul>

<Space height={1} />

<h4>Some old screenshots</h4>

<div class="old-screenshots">
  <figure>
    <img src={pic1} alt="Screenshot from April 20 2022" />
    <figcaption>First prototype (April 20 2022)</figcaption>
  </figure>

  <figure>
    <img src={pic2} alt="Screenshot from July 9 2022" />
    <figcaption>
      Weekly Calendar view showing time spent (July 9 2022)
    </figcaption>
  </figure>

  <figure>
    <img src={pic3} alt="Screenshot from March 16 2023" />
    <figcaption>
      Weekly Calendar view with project time and time spent from
      multiple devices (March 16 2023)
    </figcaption>
  </figure>
</div>

<style>
  .old-screenshots {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  img {
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
</style>
