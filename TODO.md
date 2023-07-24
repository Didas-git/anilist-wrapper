# TODO

## V1

- [x] Media Query
- [x] Support complex fields
- [x] Ability to chose what fields to return in complex fields
- [x] Support nested complex fields
- [x] Add ability to pass in default fields at query creation
- [x] Support dynamic variables
- [x] Improve performance
- [x] Fix how relations work
- [x] Support nested complex fields
- [x] Page Query (Partially)
- [x] Set -> Map
- [x] Character Query
- [x] Studio Query
- [x] Staff Query
- [x] Authentication
- [ ] GenreCollection Query
- [ ] MediaTagCollection Query
- [ ] Viewer Query
- [x] MediaTrend Query
- [x] MediaList Query
- [ ] MediaListCollection Query
- [ ] Notification Query
- [ ] Review Query
- [ ] Activity Query
- [ ] ActivityReply Query
- [ ] Following Query
- [ ] Follower Query
- [ ] Thread Query
- [ ] ThreadComment Query
- [ ] Like Query
- [ ] AniChartUser Query
- [ ] SiteStatistics Query
- [ ] ExternalLinkSourceCollection Query
- [ ] Fully implement Page query
- [ ] Fully implement Media Query
- [x] AiringSchedule Query
- [ ] Recommendation Query
- [ ] User Query

## ~

- [ ] Further improve performance[^1]
- [x] Add ESLint
- [ ] Add proper tests using vitest

## V2

- [ ] Initial support for Mutations
- [ ] UpdateUser Mutation
- [ ] SaveMediaListEntry Mutation
- [ ] UpdateMediaListEntries Mutation
- [ ] DeleteMediaListEntry Mutation
- [ ] DeleteCustomList Mutation
- [ ] SaveTextActivity Mutation
- [ ] SaveMessageActivity Mutation
- [ ] SaveListActivity Mutation
- [ ] DeleteActivity Mutation
- [ ] ToggleActivityPin Mutation
- [ ] ToggleActivitySubscription Mutation
- [ ] SaveActivityReply Mutation
- [ ] DeleteActivityReply Mutation
- [ ] ToggleLike Mutation
- [ ] ToggleLikeV2 Mutation
- [ ] ToggleFollow Mutation
- [ ] ToggleFavourite Mutation
- [ ] UpdateFavouriteOrder Mutation
- [ ] SaveReview Mutation
- [ ] DeleteReview Mutation
- [ ] RateReview Mutation
- [ ] SaveRecommendation Mutation
- [ ] SaveThread Mutation
- [ ] DeleteThread Mutation
- [ ] ToggleThreadSubscription Mutation
- [ ] SaveThreadComment Mutation
- [ ] DeleteThreadComment Mutation
- [ ] UpdateAniChartSettings Mutation
- [ ] UpdateAniChartHighlights Mutation

[^1]: There are a lot of `forEach` and other loops that can be either changes to c-like loops or to more performant counterparts given the scenario, there are also some improvements that could be made along the parser