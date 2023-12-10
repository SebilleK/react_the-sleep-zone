# The Sleep Zone

This is a simple React + Vite app that provides 2 calculators:

The first uses a bedtime input to calculate the best times to wake-up according to the duration of a normal sleep cycle, while the second calculates the best bedtime in a similar way according to a targeted wake-up input. A theme switcher (dark/light) was included.

The styling is fully done with Bootstrap, except for a few adjustments. This web app was created to practice React and test Bootstrap, and the calculators were previously coded for a pure HTML/CSS + JS web app.

### Possible Optimizations (TBA):

**General:**

- The `timeConvert(num)` function can be in its own file since it's used twice.
- Add a failsafe in case the user doesn't input anything and submits anyway.
- Clean up comments.

**Responsiveness:**

- Make the title show on smaller screens (under 990px width).
- Time inputs between 768px and 1024px are too small; make them bigger.

### Useful Links:

- [Icons/Symbols](https://symbl.cc/en/)
- [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
