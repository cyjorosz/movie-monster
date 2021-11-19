import React from 'react';
import { screen, render } from '@testing-library/react';
import axios from 'axios';

import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');

afterEach(() => {
   axios.get.mockClear();
   jest.resetAllMocks();
});

describe("API tests", () => {

   test('returns error message when there is an error when fetching', async () => {
     axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
  
     render(
     <BrowserRouter>
      <Home/>
    </BrowserRouter>);
  
     const message = await screen.findByText(/Error/);
     expect(message).toBeInTheDocument();
   });

  test('renders the shows returned by the API', async () => {

    const shows = [
      {"id":250,"url":"https://www.tvmaze.com/shows/250/kirby-buckets","name":"Kirby Buckets","type":"Scripted","language":"English","genres":["Comedy"],"status":"Ended","runtime":30,"averageRuntime":30,"premiered":"2014-10-20","ended":"2017-02-02","officialSite":"http://disneyxd.disney.com/kirby-buckets","schedule":{"time":"07:00","days":["Monday","Tuesday","Wednesday","Thursday","Friday"]},"rating":{"average":null},"weight":69,"network":{"id":25,"name":"Disney XD","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":{"id":83,"name":"DisneyNOW","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"dvdCountry":null,"externals":{"tvrage":37394,"thetvdb":278449,"imdb":"tt3544772"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"},"summary":"<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character. <b>Kirby Buckets</b> introduces viewers to the vivid imagination of charismatic 13-year-old Kirby Buckets, who dreams of becoming a famous animator like his idol, Mac MacCallister. With his two best friends, Fish and Eli, by his side, Kirby navigates his eccentric town of Forest Hills where the trio usually find themselves trying to get out of a predicament before Kirby's sister, Dawn, and her best friend, Belinda, catch them. Along the way, Kirby is joined by his animated characters, each with their own vibrant personality that only he and viewers can see.</p>","updated":1617744408,"_links":{"self":{"href":"https://api.tvmaze.com/shows/250"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1051658"}}},
      {"id":251,"url":"https://www.tvmaze.com/shows/250/kirby-buckets","name":"Kirby Buckets","type":"Scripted","language":"English","genres":["Comedy"],"status":"Ended","runtime":30,"averageRuntime":30,"premiered":"2014-10-20","ended":"2017-02-02","officialSite":"http://disneyxd.disney.com/kirby-buckets","schedule":{"time":"07:00","days":["Monday","Tuesday","Wednesday","Thursday","Friday"]},"rating":{"average":null},"weight":69,"network":{"id":25,"name":"Disney XD","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":{"id":83,"name":"DisneyNOW","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"dvdCountry":null,"externals":{"tvrage":37394,"thetvdb":278449,"imdb":"tt3544772"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"},"summary":"<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character. <b>Kirby Buckets</b> introduces viewers to the vivid imagination of charismatic 13-year-old Kirby Buckets, who dreams of becoming a famous animator like his idol, Mac MacCallister. With his two best friends, Fish and Eli, by his side, Kirby navigates his eccentric town of Forest Hills where the trio usually find themselves trying to get out of a predicament before Kirby's sister, Dawn, and her best friend, Belinda, catch them. Along the way, Kirby is joined by his animated characters, each with their own vibrant personality that only he and viewers can see.</p>","updated":1617744408,"_links":{"self":{"href":"https://api.tvmaze.com/shows/250"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1051658"}}}
     ];
     axios.get.mockResolvedValueOnce({data: shows});

     render(
     <BrowserRouter>
       <Home/>
     </BrowserRouter>
     )
      let show1= await screen.findByTestId('card_0')
      expect(show1.href).toEqual("http://localhost/250")

      let show2= await screen.findByTestId('card_1')
      expect(show2.href).toEqual("http://localhost/251")
    })
  
})
