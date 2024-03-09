# google-dorker
A Simple Google Dorking agent

## About

This is a google dorking agent that helps you generate google dorking links . 
It has a set of predefined URLs for dorking that helps in OSINT

## Features 
- Search and click function . No hassle of copy-pasting a url.
- Dark mode for the peeps who love it(We know everyone does)

## Dorking Notes 

Some helpful dorking notes for reference.

| Parameter          | Description                                                                                          | Example Use Case                                                                                     |
|--------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `site:`            | Narrows search results to a specific website.                                                       | `site:example.com` - Searches only within `example.com`.                                             |
| `filetype:`        | Limits results to files of a certain type.                                                          | `filetype:pdf` - Finds PDF files.                                                                    |
| `intitle:`         | Searches for a specific text within the title of a webpage.                                         | `intitle:"login page"` - Finds webpages with “login page” in the title.                              |
| `inurl:`           | Finds URLs that contain a specified keyword.                                                        | `inurl:admin` - Locates pages with “admin” in the URL.                                               |
| `" "` (exact match)| Searches for the exact phrase within quotes.                                                        | `"confidential document"` - Finds pages containing the exact phrase “confidential document”.         |
| `intext:`          | Searches for pages containing the specified text in the webpage's content.                          | `intext:"confidential"` - Finds pages that have “confidential” somewhere in the text.                |
| `cache:`           | Shows the version of the webpage as it appeared when Google last indexed it.                        | `cache:example.com` - Displays Google’s cached version of `example.com`.                             |
| `link:`             | Finds pages that link to a specific URL.                                                                    | `link:example.com` - Finds pages that link to `example.com`.                                           |
| `related:`          | Finds websites related to a specified URL.                                                                  | `related:example.com` - Shows websites related to `example.com`.                                       |
| `info:`             | Presents some information that Google has about a specific web page.                                        | `info:example.com` - Shows information about `example.com`.                                            |
| `define:`           | Finds definitions of words, phrases, and acronyms from the web.                                             | `define:SQL Injection` - Finds definitions of SQL Injection from various sources.                      |
| `source:`           | Used in Google News search to narrow results from a specific news source.                                   | `source:"BBC News"` - Finds news articles only from BBC News.                                          |
| `allintext:`        | Searches for pages where all the specified words appear in the text.                                        | `allintext:username password` - Finds pages where both "username" and "password" appear in the text.   |
| `allinurl:`         | Searches for pages with all the specified terms in the URL.                                                 | `allinurl:profile account` - Finds pages where the URL contains both “profile” and “account”.          |
| `site:` + `-inurl:` | Combines narrowing search results to a specific site while excluding URLs containing a specified keyword.   | `site:example.com -inurl:login` - Searches within `example.com` but excludes URLs with “login” in them.|


## Pictures 
![image](https://github.com/ciatech-network/google-dorker/assets/160589891/f5274796-9108-40b8-abda-533472240950)

 

