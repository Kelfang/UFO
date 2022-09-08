# UFO Sightings

## Project Overview

The purpose of this project is to create an interactive webpage that houses a dynamic table that allows users to filter multiple criteria simultaneously on UFO sightings. This required adding table filters for city, state, country, and shape (specifically the shape of the presumed UFO).

## Resources
* JavaScript  
* HTML
* CSS
* D3.js 
* Bootstrap
* Data Sources: .js and .html files

## Summary of Results

Overall, the webpage is straightforward, and the capabilities of the table are presented in an intuitive manner. In a previous iteration, the only filter that could be applied to the table was the date. As you can see in the photos below, one or many fields can be used to isolate specific sightings. 

<sub>Single Field Search - City</sub>
![single_field_search](https://github.com/Kelfang/UFO/blob/main/static/images/single_field_search.png)

In the image below, I have used three of the filters simultaneously to showcase how the data is presented once the filters are applied. With seven headers, it proves to be very advantageous to have more than one filter available for use. Multiple filters provide the opportunity for isolating data while still allowing more sightings to be loaded into the table that could span well beyond the United States and Canada and/or provide a larger date range. Overall, this webpage allows for sizable datasets. 

<sub>Multiple Field Search – Date, State, and Shape</sub>
![multiple_field_search](https://github.com/Kelfang/UFO/blob/main/static/images/multiple_field_search.png)

## Final Thoughts

While I have many positive things to say about this webpage and its functionality, there are some improvements that can be made. The primary drawback on this page is that you have only one way to take in the results, by reading. While the data itself is interesting, this singular form of presenting information won’t hold the users' attention for long. I believe that a map showing the outcome of the filters would be a great way to visualize the data and see true parallels across specific dates, locations, shapes, etc. 

For example, by looking at the date of 1/1/2010, you see that there were 16 UFO sightings across the state of California. In the photo below, this is just half of those events across the state. 

<sub>California Sightings – 1/1/2010</sub>
![cali_sightings_1_1_2010](https://github.com/Kelfang/UFO/blob/main/static/images/cali_sightings_1_1_2010.png)

While I recognize a few of the cities, many I do not. Therefore, seeing the sightings plotted on a map based on the filters fuels the notion we may not be alone as these sightings are near one another on the same date. This makes a very impactful statement and will likely cause the user to interact with the data for longer periods of time and revisit the page seeking updates.

I also have three recommendations for improving the existing table and filters.

1.	Standardize the data within the cells. You can see the variability in all the images shown above. The duration is presented in numerous ways which detracts from data itself. Additionally, the comments section is riddled with errors likely due to the encoding of the data (or misspellings). I recommend that the data get cleaned and standardized prior to loading it into the table.

2.	I also suggest that the case sensitivity be removed from all filters and that the city filter have partial word capabilities. For example, many of the cities that are listed have two words and that may not be known to the user, or they only know how to spell part of the name. These changes would avoid user frustration and allow them to access the results even if it’s not exact.

3.	Lastly, I suggest that the shape filter have a drop-down menu inserted instead of a text field. The shape field incorporates so many different descriptions that it’s hard to know what to enter to get results. For instance, it never would have occurred to me to enter “fireball” or “chevron”. The parameters within this field have the least amount of conformity and would likely see more use with this functionality adjusted.



