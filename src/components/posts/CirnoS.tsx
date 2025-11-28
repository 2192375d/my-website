const ASSET_SOURCE = "/assets/posts/CirnoS/";

export default function CirnoS() {
  return (
    <section>
      <ul>
        <li><a href="https://github.com/2192375d/Touhou-Game-Jam-16-Cirno-s-Swirlaria">github repo</a></li>
        <li><a href="https://2635266513.itch.io/cirnos-swirlaria">game link</a></li>
      </ul>
      <h3>what even is this?</h3>
      This is a video game project which me and three of my friends worked on a while ago, dedicated for the <a href="https://itch.io/jam/touhou-jam-16">Touhou's bi-annual game jam</a>; due to a bunch of exams I end up writing this dev log on November 14th (that is, 3 weeks after :(
      <br />

      Here are the assets made for the game, and the color palette I used:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSMostAssets1.webp"} />

      <img className="postImg" src={ASSET_SOURCE + "CirnoSColorPalette.webp"} />
      <br />
      Some screenshots of the game:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSScreenShot2.webp"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSScreenShot4.webp"} />
      <br />
      <h3>team composition</h3>
      We are in a small team of 4 people; 3 of us are doing a mixture of game dev and art, and one person is dedicated for illustration.
      <br />
      Team composition:
      <ul>
        <li>Lumiere (me): responsible for the 2D action part, and pixel art assets</li>
        <li><a href="">Yoshixi</a>: responsible for the ice cream making part, and testing</li>
        <li><a href="https://github.com/heptagonal7">Cheese</a>: responsible for some game visual features, pixel art assets, and testing</li>
        <li><a href="https://amai-ichigo.itch.io/">Ichigo</a>: responsible for illustrations (she's really good)</li>
      </ul>
      The roles above is just a really really really general generalization of what each one worked on, in fact, we all sort of just did a bit of everything, instead of been assigned to a specific task.
      <br />
      To be honest everyone in the game contributed almost equally and enormously, the game would look much worse if we had one less person.
      <h3>pre-jam planning</h3>
      Our idea was to mix one of those Papa's foodaria game with classical stg (bullet hell) game.
      <br />
      After chatting with my teammates for around 3 hours, we decided that it's best to make a game where this random Touhou character, called <a href="https://en.touhouwiki.net/wiki/Cirno">Cirno</a>, to sell ice creams while dodging bullets from <a href="https://en.touhouwiki.net/index.php?title=Reimu_Hakurei&mobileaction=toggle_view_mobile">Reimu</a> (another Touhou character).
      <br />
      <h3>How does the game work?</h3>
      A quick explanation of how the game works:
      <ul>
        <li>On the right side of the game, it's the danger zone, where Cirno needs to dodge bullets while grabbing resources</li>
        <li>On the left side of the game, it's the safe zone, where Cirno makes ice creams and sell it to customers</li>
      </ul>
      The game follows the following loop:
      <ul>
        <li>Go to the danger zone, grab the resources (while dodging bullets)</li>
        <li>Head back to safe zone, make ice creams</li>
        <li>repeat</li>
      </ul>
      If you get hit, you lose HP, successfully making ice creams restores your HP, and rewards you score.
      <br />
      Your goal is to reach certain amount of score within the time constraint (to get the happy ending).
      <br />
      <h3>Day 0 (early development during day 1, but it didn't take too long)</h3>
      Here are two early sketches of the (expected) gameplay
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSEarlySketch1.webp"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSEarlySketch2.webp"} />
      <br />
      (Unfortunately some features are discarded, like the obstacle)
      <br />
      At the start of the jam, I made a very basic "base" for the game, just to motivate the team to get started.
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSScreenShot1.webp"} />
      <br />
      (Yeah that green part is the danger zone and flesh color is the safe zone)
      <br />
      After watching some <a href="https://www.youtube.com/watch?v=X3J0fSodKgs">tutorials</a> about Godot inventory system on YouTube, I planed out a quick chart for how every ingame components will tie with each other.
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSPlans.webp"} />
      <br />
      (Yeah it's pretty messy; I was too excited to start working on it so I just quickly wrote everything)
      <br />
      Because I have previous experience with making bullet hell games (all of which are incomplete products), we decided that I'm gonna be dealing with the resource gathering + bullet dodging part, while the other developers primarily handle the ice cream making part.
      <br />
      Just like that, development started.
      <br />
      <h3>side note</h3>
      The following contents on this page describe what I did during development from my persepective, if you want to see what Yoshi did (the ice cream making making guy), check his <a href="https://www.yoshixi.net/hackathons/touhoujam6">dev log</a>
      <h3>Day 1 (resource gathering system)</h3>
      (Check the source code from the github repo if you wanna see how exactly things are made)
      <br />
      The first thing I did was to create the script for the resource of Item. It's a very simple thing with a texture and a name.
      <br />
      Once this is done, I created the resources, and made a simple inventory system where the inventory is a dictionary that takes an item resource, and provides the number of such item that player has.
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot1.webp"} />
      <br />
      Next I made an "ObjectInteractComponent" to check if player is in the range to grab the item, and interact key detection for grabbing it.
      <br />
      Now everything for item object are set, I made use of those components and made a code to generate it randomly on every interval of 0.5 to 1.5 seconds.
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot2.png"} />
      <br />
      (Other developers later on make it spin, and modulate to make everything look nicer)
      <br />
      Next I made the ui display the inventory, on the very right of the screen
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSScreenShot5.png"} />
      <br />
      And I attached a global signal to update the inventory UI, everytime when it's necessary.
      <br />
      After finishing testing + debugging, with doubts of whether or not I can even complete this project, I headed back to sleep.

      <h3>Day 2 (bullet hell system)</h3>
      Day 2, I started by connecting the sprites for the enemy, that is Reimu. And setup an AI component for her, that randomly chooses attacks on every 1-2 seconds.
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot5.png"} />
      <br />
      Next I made the scripts for the resources of bullet patters, and made use of Cheese's assets for the bullets as part of each resources
      <br />

      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot7.png"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot8.png"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot9.png"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot10.png"} />
      <br />
      After that I worked on some bullet patterns that Reimu uses to attack, and I took reference from my Cheese's sketch for the attacks:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot3.png"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot4.png"} />
      <br />
      One funny thing is that I can't even understand the code I wrote for the 3rd bullet pattern, but somehow this pattern worked out well after I tweaked the numbers a bit.
      <br />
      <video
        src={ASSET_SOURCE + "CirnoSClip1.mp4"}
        autoPlay
        muted
        loop
        playsInline
        width="350"
      />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot6.png"} />
      <br />
      Once I finished all the patterns, I added hitbox for Cirno, and created a HP component for her, and leave Yoshi to connect everything from Cirno's HP component with the TV that displays the health all that.
      <br />
      It's 4am, so I headed back to sleep. The game is somewhat playable already, hopefully I can get everything done tomorrow.
      <h3>Day 3 (add illustrations, game menu, story, end game screen all that)</h3>
      Today is a lot of stress, as the deadline is at 3pm (technically it's extended but we barely worked on it afterwards)
      <br />
      As what the title suggested, I communicated with Ichigo and got some of the nice arts she made:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot11.webp"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot12.webp"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot13.webp"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot14.webp"} />
      <br />
      Yoshi connected those images with the game, and added checks for scoring to trigger the corresponding ending, cooperating with Cheese who is writing the scripts for the stories, while I worked on the game menu and "how to play" page:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot18.png"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot15.png"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot16.png"} />
      <img className="postImg" src={ASSET_SOURCE + "CirnoSDevScreenShot17.png"} />
      <br />
      After some FINAL testings + tweakings, we launched the game
      <br />
      <h3>conclusion</h3>
      And that's it, there's much much more stuffs I did after the day of release, like adding new features, dealing with stupid godot export and stupid itch.io website lagging all that. But I'm too lazy to include all of them. They aren't even part of the 3 days afterall!
      <br />
      I'm really happy for completing this, this is the first time I managed to prove myself that I can actually complete a game dev project without gaving up half way.
      <br />
      There is an enormous amount of stuffs I learned when making this, mostly tied to resources, effect, and ways of managing big project (In cmd, I ran `tree .` in the root directory of the project, and it tells me we got 474 files! Never had a project with many files made in barely 3 days!)
      <br />
      I'm also really happy with regards to how much the other three members contributed, I'm really thankful! I definitely cannot do all of this in 3 days! Thanks!
      <br />
      next dream...
      <br />

    </section>
  )
}
