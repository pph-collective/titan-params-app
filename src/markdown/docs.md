# Docs

The TITAN model uses various parameters to control the set up and running of the agent based model.  This website serves as a guide to what parameters currently exist and how to use this information to adjust the parameters needed for a specific run of the model.

The model takes as a command line argument (TO_REVIEW) the path to either a single [yaml](https://gettaurus.org/docs/YAMLTutorial/) file or a directory of yaml files.  Either option is fine, it just depends on user preference if they like all params in one file, or the organization of breaking it into multiple files.  The yaml file(s) only need to contain parameters that the user wishes to change from the default.  This subset of parameters will be combined with all of the defaults to calculate the full parameter specification for a model run.  This full specification is additionally saved off to the `results` directory with the reports so that the run can be reproduced in the future.

## Types of Parameters

Parameters span a variety of areas, and many of them will either have a good default or will not be used at all based on the features in use in the model (e.g., if incarceration is off, the incarceration params won't be used).  However, some parameters are required for every model as they are pivotal to how the model runs.  These are:

* `classes`: There are defaults here, however they should always be reviewed.  Where a parameter of type `sub-dict` has `keys`, these keys refer to the parameters that have been set in classes.  For example, if `WHITE` is set as one of the races, where `race` is a `key` for a `sub-dict`, they yaml might look like:

```
subdict_param:
  WHITE:
    pop: .9
```

* `demographics`: For each of the populations that are set in the `classes` params, there should be a corresponding demographics key.  At a minimum, the `pop` (population) percentage should be set. The model will validate that all the population percentages add up to 1 at both the `race` and `sex_type`/`population` levels.  So if our races are `WHITE` and `BLACK` (the default) and out only `sex_type` is `MSM` and out `population` is `IDU` (the default), below is a minimal yaml needed to set that up.

```
classes:
  sex_types:
    - MSM

demographics:
  WHITE:
    pop: 0.6 # 60% of the total population is WHITE
    MSM:
      pop: 1.0 # 100% of the white population is MSM
    IDU:
      pop: 0.1 # 10% of the white population is IDU - note, this is not a sex type so is outside of the summing to 100% constraint
  BLACK:
    pop: 0.4 # 40% of the total population is BLACK
    MSM:
      pop: 1.0 # 100% of the black population is MSM
    # IDU not needed to be specified if not used in the BLACK population
```
