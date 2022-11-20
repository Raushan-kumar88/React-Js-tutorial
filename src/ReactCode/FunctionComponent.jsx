import React from 'react'

function FunctionComponent() {
  function Mango(){
    return(<>
          <h3>About of Me </h3>
      <details>Originally from Latin, Lorem ipsum has no intelligible meaning. It is simply a display of letters to be viewed as a sample with given graphical elements in a file. "Lipsum" (a portmanteau of lorem and ipsum) generators are commonly used to form generic text in a file</details>
    </>
     
    )
  }
  return (
    <>
         <figure class="md:flex  bg-slate-100  md:p-0 dark:bg-slate-800 ">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/95163861?v=4" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium  text-slate-100 dark:text-slate-100">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Raushan Gupta
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Software Engineer, India
      </div>
    </figcaption>
  </div>
</figure>
  <Mango/>
    </>
  )
}

export default FunctionComponent