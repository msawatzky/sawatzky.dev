export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We are so grateful for the website Matt built for our daycare. He really captured the welcoming feel of our centre and made it simple for families to find everything they need. Whenever we’ve needed an update or run into a small hiccup down the road, he has been wonderfully responsive and easy to work with. I couldn’t recommend him more!",
    name: "Deepa Raghavan",
    detail: "Executive Director, Epiphany Childrens Centre, Winnipeg, MB",
  },
  {
    quote:
      "Matt completely modernized our online presence. The new site is clean, fast, and makes it effortless for golfers to find course info and book tee times. Since launch, he’s been quick to respond to every update request and an absolute pleasure to work with. We’re thrilled with the transformation and look forward to a great long-term relationship.",
    name: "Bill Bauer",
    detail: "General Manager, Edmonton Springs Golf Resort, AB",
  },
  {
    quote:
      "Matt built us a fast, clean, and modern website that immediately elevated our online presence. What really sets him apart, though, is what happens after launch. His ongoing maintenance keeps everything running smoothly, and his support is always responsive, reliable, and easy to work with.",
    name: "Brian Zadro",
    detail: "President, Transcona Golf Club, Winnipeg, MB",
  },
];
