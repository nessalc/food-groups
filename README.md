# Food Groups

This will (eventually) be an app (for web, Android, and iPhone) to coordinate groups of people gathering for meals.

## The Problem:

In my experience, getting more than one individual to agree on what to have for lunch can be a _major_ chore. The goals of this app are to simplify the decision making by taking into account

- individual preferences
  - restaurant style
  - beverage options
  - dietary restrictions
  - variety
- individual locations
- price
- volume level
- entertainment
  - live music
  - sports on TV
  - PPV sporting events
- kid-friendliness

and returning a location for lunch that's amenable to all members of the party.

### Scenario 1:

A group of gamers getting together before a session. One party member doesn't want burgers because he just had that for lunch, and another is allergic to chicken. Find an otherwise stereotypical tavern (where all great adventures start) that serves something other than burgers (it can serve them, but needs other entrees) and has chicken-free options.

### Scenario 2:

A group of athletes are carbo-loading for a marathon. Find a restaurant that serves pasta.

### Scenario 3:

A couple out for a blind date, and live on opposite sides of town. Find a casual restaurant somewhere in the middle that serves wine and is conducive to conversation (no loud music).

### Scenario 4:

A group of developers is getting together to socialize. Find a place that can accomodate a large group, that serves Jolt Cola, and is a reasonable distance from all individuals.

## The types of "questions" you can ask:

- Find a casual restaurant halfway between party A and party B that serves Diet Dr Pepper, but isn't Applebee's.
- Find a fast-food joint that I haven't been to in a while.
- What's the newest place in town?
- What's the oldest Mexican restaurant in town?
- Where can I find live music and sushi?

## Expected General Usage:

- Open app
- Choose predefined group or search for/select individuals
- Click/press "Find Restaurant"
- See ranked choices (Top 5? Configurable?). Option to send choices to others for review
- Review process allows a veto on specific restaurants, proposal of further options, or dropping out of group; will prompt for revote if mutual agreement cannot be reached
- After selection has been made, send message to selected individuals with directions to choice.

# Definitions

Some definitions must be established for this to work, as different people, even using the same language, may have different ideas on what to call something. The following are tentative definitions I've come up with, but are by no means exhaustive, and may not be correct.

- Service style:
  - Casual: order from a menu while seated at a table; food is delivered to the table. Check may be paid at the table or at a register.
  - Fast Food: order, pay, and pick up food from the counter prior to being seated.
  - Fast Casual: order and pay at the counter, but limited table service brings food to the table.
  - Buffet: after being seated and possibly ordering drinks, individuals choose their own food from the buffet.
  - Other possibilities:
    - Teppanyaki
    - Mongolian Barbecue
    - Fine dining (dress code)

# Roadmap

1. Determine database and framework to utilize.
   - After many iterations, I'm leaning toward a graph database (Neo4j? OrientDB?)
   - React? Angular? Vue? Something Else? I'm somewhat familiar with React already...
2. Build database schema
3. Build basic CRUD interface
4. Populate database (crowdsource)
5. Begin work on real application
