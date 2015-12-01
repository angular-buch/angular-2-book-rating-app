// imports all known tests and executes jasmine

var jasmineEnv = jasmine.getEnv();

import './hello-world_test';
import './components/book-rating_test';
import './components/book-component_test';

jasmineEnv.execute();
