"""
Tests for CourseData utility class.
"""
from lms.djangoapps.course_blocks.api import get_course_blocks
from student.tests.factories import UserFactory
from xmodule.modulestore.tests.django_utils import ModuleStoreTestCase
from xmodule.modulestore.tests.factories import CourseFactory
from ..new.course_data import CourseData


class CourseDataTest(ModuleStoreTestCase):
    """
    Simple tests to ensure CourseData works as advertised.
    """

    def setUp(self):
        super(CourseDataTest, self).setUp()
        self.factory_course = CourseFactory.create()
        self.user = UserFactory.create()
        self.factory_course = CourseFactory.create()
        self.expected_results = {
            'course': self.factory_course,
            #'collected_block_structure': None,
            'course_structure': get_course_blocks(self.user, self.factory_course.location),
            'course_key': self.factory_course.id,
            'location': self.factory_course.location,
        }

    def test_fill_course_data(self):
        """
        Tests to ensure that course data is fully filled with just a single input.
        """
        for kwarg in self.expected_results:  # We iterate instead of ddt due to dependence on 'self'
            if kwarg == 'location':
                continue  # This property is purely output; it's never able to be used as input
            kwargs = {kwarg: self.expected_results[kwarg]}
            print kwargs
            course_data = CourseData(self.user, **kwargs)
            for arg in self.expected_results:
                if arg != kwarg:  # No point validating the data we used as input
                    self.assertEqual(self.expected_results[kwarg], getattr(course_data, kwarg))

    def test_no_data(self):
        """
        Tests to ensure ??? happens when none of the data are provided.

        Maybe a dict pairing asked-for properties to resulting exceptions? Or an exception on init?
        """
        with self.assertRaises(AttributeError):
            course_data = CourseData(self.user)  # pylint:disable=unused-variable
