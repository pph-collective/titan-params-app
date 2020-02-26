# Docs

The TITAN model uses various parameters to control the set up and running of the agent based model.  This website serves as a guide to what parameters currently exist and how to use this information to adjust the parameters needed for a specific run of the model.

## Getting Started

The model takes several command line arguments for the setting and parameters:
1) (required) a path to either a single [yaml](https://gettaurus.org/docs/YAMLTutorial/) file or a directory of yaml files;
2) (optional) a setting name; and 
3) (optional) a true/false for whether to use the `base` setting (default `True`).

Either a file or directory may be used, it just depends on if you like all params in one file or the organization of breaking it into multiple files.  The yaml file(s) only need to contain parameters that the user wishes to change from the default. Any unspecified parameters will revert to the defaults. The subset of parameters given to the model will be combined with all of the defaults to calculate the full parameter specification for a model run.  This full specification is additionally saved off to the `results` directory with the reports so that the run can be reproduced in the future.

If using `run_titan.py`:
```bash
python -m run_titan -p /dir/to/my_params -S atlanta
```

If submitting a job using `subTitan.sh`:
```bash
./subTitan my_params/ -S atlanta
```

The fully computed parameters for your model run can be found in your results directory as `params.yml`.

### Settings

Settings allow base populations to be defined and easily re-used across model runs.  They typically are named after the city they are modeled after.  One exception is `base`, which contains complex population-based defaults and can be used in combination with any other setting (or no setting). Any values set at this level will override what is in the `default` field of a parameter definition.

The order of preference for a parameter value is:

1. Param files (`-p` flag or first argument to `subTitan.sh`)
2. City Setting files (`-S` flag)
3. Base Setting files (`-b` flag)
4. Parameter definition defaults

### Key Parameters

Parameters span a variety of areas, and many of them will either have a good default or will not be used at all based on the features in use in the model (e.g., if incarceration is off, the incarceration params won't be used).  However, some parameters are required for every model as they are pivotal to how the model runs.  These are:

* `classes`: There are defaults here; however, they should always be reviewed.  Where a parameter of type `sub-dict` has `keys`, these keys refer to the parameters that have been set in classes.  For example, if `WHITE` is set as one of the races, where `races` is a `key` for a `sub-dict`, they yaml might look like:

```yml
subdict_param:
  WHITE:
    ppl: .9
```

* `demographics`: For each of the populations that are set in the `classes` params, there should be a corresponding demographics key.  At a minimum, the `ppl` (population) percentage should be set. The model will validate that all the population percentages add up to 1 at both the `races` and `sex_types` levels.  So if our races are `WHITE` and `BLACK` (the default) and our only `sex_types` are `MSM` and `ABC` and our `populations` is `PWID` (the default), below is a minimal yaml needed to set that up.

```yml
classes:
  sex_types:
    MSM: # this is a sex_type definition for a cis man who sleeps with cis men
      gender: M
      cis_trans: cis
      sleeps_with:
        - MSM
    ABC: # this a sex_type definition that highlights how you can define a "new" sex_type with the params
      gender: O
      cis_trans: trans
      sleeps_with: []

demographics:
  WHITE:
    ppl: 0.6 # 60% of the total population is WHITE
    MSM:
      ppl: 1.0 # 100% of the white population is MSM
    PWID:
      ppl: 0.1 # 10% of the white population is PWID - note, this is not a sex type so is outside of the summing to 100% constraint
  BLACK:
    ppl: 0.4 # 40% of the total population is BLACK
    MSM:
      ppl: 0.9 # 90% of the black population is MSM
    ABC:
      ppl: 0.1 # 10% of the black population is ABC
    # PWID not needed to be specified if not used in the BLACK population as the default ppl is 0
```

* `features`: By default all `features` are set to `false` so that they are not in use.  If you want to use a feature (e.g. `incar`), update the `features` params accordingly.  Many features files have a related section which has the related parameters for that feature when it is on.

```yml
features:
  incar: true
  vaccine: true

incar:
  haart:
    prob: 0.9
```

* `model`: This controls core parts of the model, such as the population size, random seeds, and network type.

### Data Types

Every parameter is associated with a data type to ensure that what is entered is what the model expects.  The types are:

* `float`: a floating point number (e.g.`0.67`)
* `int`: an integer (e.g. `2`)
* `boolean`: a `true` or `false` value
* `enum`: a value from a set list (see `values` of same definition for valid options)
* `array`: a list of values from a set list (see `values` of same definition for valid options)
* `bin`: a sub-structure with numeric keys and set fields (see `fields` of same definition for required sub-fields)
* `sub-dict`: a sub-structure with keys that are based on the fields in `classes` (e.g. `races`)
* `definition`: a sub-substructure with keys you define, but required fields (see `fields` of same definition for required sub-fields). Within a `definition`'s fields there is the option of a special `type` of `keys`, which means the values acceptable for that field are the keys that are defined in the definition (see `classes.sex_types` for an example).

```yml
float_param: 0.67
int_param: 1
boolean_param: true
enum_param: option_a # values were option_a, option_b, option_c
array_param: # values were option_a, option_b, option_c
  - option_b
  - option_c
bin_param:
  1:
    prob: 0.45
    min: 1
    max: 6
  2:
    prob: 0.55
    min: 7
    max: 34
subdict_param:
  CLASS_A:
    my_param: 4
  CLASS_B:
    my_param: 5
definition_param:
  MY_PARAM:
    weight: 20
    age: 32
  YOUR_PARAM:
    weight: 22
    age: 14
```

In addition to the data types, there may be a `min`, `max`, or `values` set for the field.  This will ensure that the value is greater than or equal to the `min`, less than or equal to the `max` or listed within `values`.
