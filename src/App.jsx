import React from 'react'
import { FaRegFolderClosed } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";




function App() {
  return (
<div class="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
  <div class="flex-col hidden gap-2 text-foreground bg-background md:flex">
    <div class="sticky top-0 p-2">
      <button class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 justify-start w-full gap-2 px-2 text-left">
        <div class="flex items-center justify-center rounded-full w-7 h-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
          </svg>
        </div>
        <div class="overflow-hidden text-lg grow text-ellipsis whitespace-nowrap">Sales bot</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4"
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
        </svg>
      </button>
    </div>
    <div class="flex-1 overflow-auto">
      <div class="grid gap-1 p-2 text-foreground">
        <div class="px-2 text-lg flex items-center gap-2 font-medium text-muted-foreground">
          <FaRegFolderClosed />
            New Chats
            </div>
      </div>
      <div class="grid gap-1 p-2 text-foreground">
        <div class="px-2 text-lg font-medium flex items-center gap-2 text-muted-foreground">
          <FaRegFolderClosed />
          Saved chats
          </div>
      </div>
      <div class="grid gap-1 p-2 text-foreground">
        <div class="px-2 text-lg font-medium flex items-center gap-2 text-muted-foreground">
       <FiSettings />

          Settings
          </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="sticky top-0 p-2"></div>
    <div class="flex flex-col items-start flex-1 max-w-2xl gap-8 px-4 mx-auto">
      <div class="flex items-start gap-4">
        <span class="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6 border">
          <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">YO</span>
        </span>
        <div class="grid gap-1">
          <div class="font-bold">You</div>
          <div class="prose text-muted-foreground">
            <p>
              What are the best coffee maker on sale?
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start gap-4">
        <span class="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6 border">
          <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">OA</span>
        </span>
        <div class="grid gap-1">
          <div class="font-bold">Sales Bot</div>
          <div class="prose text-muted-foreground">
            <p>
             Looking for the best coffee maker deals? We've got you covered! Here are our top picks:

              <h3 className='font-bold'>Breville Barista Express Espresso Machine</h3>

             <p> Original Price: $699.95</p>
              <p>Sale Price: $599.95</p>
            <p>  Discount: $100 off</p>
            <p>  Features: Integrated grinder, precise espresso extraction, milk frother.</p>
             <p> Why Buy: Perfect for espresso enthusiasts who want café-quality coffee at home.</p>
            </p>
          </div>
          <div class="flex items-center gap-2 py-2">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              </svg>
              <span class="sr-only">Copy</span>
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
              <span class="sr-only">Upvote</span>
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <path d="M17 14V2"></path>
                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
              </svg>
              <span class="sr-only">Downvote</span>
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                <path d="M16 16h5v5"></path>
              </svg>
              <span class="sr-only">Regenerate</span>
            </button>
          </div>
            <h4 className='text-center font-bold'>Tap a suggested question</h4>
        </div>
          <div className='flex flex-wrap items-center gap-3 justify-center'>  
            <div className='border px-4 py-3 shadow-lg rounded-lg'>What features to look for in a machine</div>
          </div>
      </div>
    </div>
    <div class="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background">
      <div class="relative">
        <textarea
          class="flex w-full bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
          placeholder="Ask a follow-up questions..."
          name="message"
          id="message"
          rows="1"
        ></textarea>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 absolute w-8 h-8 top-3 right-3"
          type="submit"
          disabled=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
          <span class="sr-only">Send</span>
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default App