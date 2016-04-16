myApp.config(function($routeProvider) {
	$routeProvider.when('/hibernate', {
        templateUrl : baseViewPackage + 'hibernate/hibernate-page.html',
        controller : 'hibernateController'
    }).when('/hibernate_introduction', {
        templateUrl : baseViewPackage + 'hibernate/introduction/introduction-page.html',
        controller : 'hibernateIntroductionController'
    }).when('/hibernate_architecture', {
        templateUrl : baseViewPackage + 'hibernate/architecture/architecture-page.html',
        controller : 'hibernateArchitectureController'
    }).when('/hibernate_diagram', {
        templateUrl : baseViewPackage + 'hibernate/architecture/diagram/diagram-page.html',
        controller : 'hibernateDiagramController'
    }).when('/hibernate_configuration', {
        templateUrl : baseViewPackage + 'hibernate/architecture/configuration/configuration-page.html',
        controller : 'hibernateConfigurationController'
    }).when('/hibernate_sessionfactory', {
        templateUrl : baseViewPackage + 'hibernate/architecture/sessionfactory/sessionfactory-page.html',
        controller : 'hibernateSessionFactoryController'
    }).when('/hibernate_session', {
        templateUrl : baseViewPackage + 'hibernate/architecture/session/session-page.html',
        controller : 'hibernateSessionController'
    }).when('/hibernate_transaction', {
        templateUrl : baseViewPackage + 'hibernate/architecture/transaction/transaction-page.html',
        controller : 'hibernateTransactionController'
    }).when('/hibernate_sample_application', {
        templateUrl : baseViewPackage + 'hibernate/sample_application/sample-application-page.html',
        controller : 'hibernateSampleAppController'
    }).when('/hibernate_annotation', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_annotation/hibernate-annotation-page.html',
        controller : 'hibernateAnnotationController'
    }).when('/hibernate_dialects', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_dialects/hibernate-dialects-page.html',
        controller : 'hibernateDialectsController'
    }).when('/hibernate_generator_classes', {
        templateUrl : baseViewPackage + 'hibernate/generator_classes/generator-classes-page.html',
        controller : 'hibernateGeneratorClassesController'
    }).when('/hibernate_generator_intro', {
        templateUrl : baseViewPackage + 'hibernate/generator_classes/introduction/generator-introduction-page.html',
        controller : 'hibernateGeneratorController'
    }).when('/hibernate_assigned', {
        templateUrl : baseViewPackage + 'hibernate/generator_classes/assigned/assigned-page.html',
        controller : 'hibernateAssignedController'
    }).when('/hibernate_increment', {
        templateUrl : baseViewPackage + 'hibernate/generator_classes/increment/increment-page.html',
        controller : 'hibernateIncrementController'
    }).when('/hibernate_sequence', {
        templateUrl : baseViewPackage + 'hibernate/generator_classes/sequence/sequence-page.html',
        controller : 'hibernateSequenceController'
    }).when('/hibernate_hilo', {
        templateUrl : baseViewPackage + 'hibernate/generator_classes/hilo/hilo-page.html',
        controller : 'hibernateHiloController'
    }).when('/hibernate_native', {
        templateUrl : baseViewPackage + 'hibernate/generator_classes/native/native-page.html',
        controller : 'hibernateNativeController'
    }).when('/hibernate_identity', {
        templateUrl : baseViewPackage + 'hibernate/generator_classes/identity/identity-page.html',
        controller : 'hibernateIdentityController'
    }).when('/hibernate_mapping', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_mapping/mapping-page.html',
        controller : 'hibernateMappingController'
    }).when('/hibernate_mapping_intro', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_mapping/introduction/mapping-introduction-page.html',
        controller : 'hibernateMappingIntroController'
    }).when('/hibernate_mapping_files', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_mapping/mapping_files/mapping-files-page.html',
        controller : 'hibernateMappingFilesController'
    }).when('/hibernate_mapping_types', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_mapping/mapping_types/mapping-types-page.html',
        controller : 'hibernateMappingTypesController'
    }).when('/hibernate_collection_mapping', {
        templateUrl : baseViewPackage + 'hibernate/collection_mapping/collection-mapping-page.html',
        controller : 'hibernateCollectionMappingController'
    }).when('/hibernate_mapping_list', {
        templateUrl : baseViewPackage + 'hibernate/collection_mapping/list/list-page.html',
        controller : 'hibernateMappingListController'
    }).when('/hibernate_mapping_set', {
        templateUrl : baseViewPackage + 'hibernate/collection_mapping/set/set-page.html',
        controller : 'hibernateMappingSetController'
    }).when('/hibernate_mapping_sortedset', {
        templateUrl : baseViewPackage + 'hibernate/collection_mapping/sortedset/sortedset-page.html',
        controller : 'hibernateMappingSortedSetController'
    }).when('/hibernate_mapping_map', {
        templateUrl : baseViewPackage + 'hibernate/collection_mapping/map/map-page.html',
        controller : 'hibernateMappingMapController'
    }).when('/hibernate_mapping_sortedmap', {
        templateUrl : baseViewPackage + 'hibernate/collection_mapping/sortedmap/sortedmap-page.html',
        controller : 'hibernateMappingSortedMapController'
    }).when('/hibernate_mapping_collection', {
        templateUrl : baseViewPackage + 'hibernate/collection_mapping/collection/collection-page.html',
        controller : 'hibernateMappingCollectionController'
    }).when('/hibernate_association_mapping', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/association-mapping-page.html',
        controller : 'hibernateAssociationMappingController'
    }).when('/hibernate_one_to_one', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/one_to_one_mapping/one-to-one-mapping-page.html',
        controller : 'hibernateOneToOneController'
    }).when('/hibernate_many_to_one', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/many_to_one_mapping/many-to-one-mapping-page.html',
        controller : 'hibernateManyToOneController'
    }).when('/hibernate_one_to_many_by_list', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/one_to_many_by_list/one-to-many-by-list-page.html',
        controller : 'hibernateOneToManyListController'
    }).when('/hibernate_one_to_many_by_bag', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/one_to_many_by_bag/one-to-many-by-bag-page.html',
        controller : 'hibernateOneToManyBagController'
    }).when('/hibernate_one_to_many_by_set', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/one_to_many_by_set/one-to-many-by-set-page.html',
        controller : 'hibernateOneToManySetController'
    }).when('/hibernate_one_to_many_by_map', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/one_to_many_by_map/one-to-many-by-map-page.html',
        controller : 'hibernateOneToManyMapController'
    }).when('/hibernate_many_to_many_by_list', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/many_to_many_by_list/many-to-many-by-list-page.html',
        controller : 'hibernateManyToManyListController'
    }).when('/hibernate_many_to_many_by_bag', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/many_to_many_by_bag/many-to-many-by-bag-page.html',
        controller : 'hibernateManyToManyBagController'
    }).when('/hibernate_many_to_many_by_set', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/many_to_many_by_set/many-to-many-by-set-page.html',
        controller : 'hibernateManyToManySetController'
    }).when('/hibernate_many_to_many_by_map', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/many_to_many_by_map/many-to-many-by-map-page.html',
        controller : 'hibernateManyToManyMapController'
    }).when('/hibernate_component_mapping', {
        templateUrl : baseViewPackage + 'hibernate/association_mapping/component_mapping/component-mapping-page.html',
        controller : 'hibernateComponentMappingController'
    }).when('/hibernate_inheritance', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/inheritance-page.html',
        controller : 'hibernateInheritanceController'
    }).when('/hibernate_inheritance_intro', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/introduction/inheritance-introduction-page.html',
        controller : 'hibernateInheritanceIntroController'
    }).when('/hibernate_per_hierarchy', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/table_per_hierarchy/per-hierarchy-page.html',
        controller : 'hibernatePerHierarchyController'
    }).when('/hibernate_per_hierarchy_xml', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/table_per_hierarchy/using_xml/per-hierarchy-xml-page.html',
        controller : 'hibernatePerHierarchyXmlController'
    }).when('/hibernate_per_hierarchy_annotation', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/table_per_hierarchy/using_annotation/per-hierarchy-annotation-page.html',
        controller : 'hibernatePerHierarchyAnnotationController'
    }).when('/hibernate_per_concrete', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/table_per_concrete/per-concrete-page.html',
        controller : 'hibernatePerConcreteController'
    }).when('/hibernate_per_concrete_xml', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/table_per_concrete/using_xml/per-concrete-xml-page.html',
        controller : 'hibernatePerConcreteXmlController'
    }).when('/hibernate_per_concrete_annotation', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/table_per_concrete/using_annotation/per-concrete-annotation-page.html',
        controller : 'hibernatePerConcreteAnnotationController'
    }).when('/hibernate_per_subclass', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/table_per_subclass/per-subclass-page.html',
        controller : 'hibernatePerSubclassController'
    }).when('/hibernate_per_subclass_xml', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/table_per_subclass/using_xml/per-subclass-xml-page.html',
        controller : 'hibernatePerSubclassXmlController'
    }).when('/hibernate_per_subclass_annotation', {
        templateUrl : baseViewPackage + 'hibernate/inheritance/table_per_subclass/using_annotation/per-subclass-annotation-page.html',
        controller : 'hibernatePerSubclassAnnotationController'
    }).when('/hibernate_transaction_management', {
        templateUrl : baseViewPackage + 'hibernate/transaction_management/transaction-management-page.html',
        controller : 'hibernateTransactionManagementController'
    }).when('/hibernate_criteria_query_language', {
        templateUrl : baseViewPackage + 'hibernate/criteria_query_language/criteria-query-page.html',
        controller : 'hibernateCriteriaQueryController'
    }).when('/hibernate_criteria_intro', {
        templateUrl : baseViewPackage + 'hibernate/criteria_query_language/introduction/criteria-introduction-page.html',
        controller : 'hibernateCriteriaIntroController'
    }).when('/hibernate_criteria', {
        templateUrl : baseViewPackage + 'hibernate/criteria_query_language/criteria/criteria-page.html',
        controller : 'hibernateCriteriaController'
    }).when('/hibernate_restrictions', {
        templateUrl : baseViewPackage + 'hibernate/criteria_query_language/restrictions/restrictions-page.html',
        controller : 'hibernateRestrictionsController'
    }).when('/hibernate_projections', {
        templateUrl : baseViewPackage + 'hibernate/criteria_query_language/projections/projections-page.html',
        controller : 'hibernateProjectionsController'
    }).when('/hibernate_order', {
        templateUrl : baseViewPackage + 'hibernate/criteria_query_language/order/order-page.html',
        controller : 'hibernateOrderController'
    }).when('/hibernate_query', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_query_language/hibernate-query-language-page.html',
        controller : 'hibernateQueryController'
    }).when('/hibernate_named_query', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_named_query/hibernate-named-query-page.html',
        controller : 'hibernateNamedQueryController'
    }).when('/hibernate_native_query', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_native_query/hibernate-native-query-page.html',
        controller : 'hibernateNativeQueryController'
    }).when('/hibernate_caching', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_caching/caching-page.html',
        controller : 'hibernateCachingController'
    }).when('/hibernate_caching_intro', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_caching/introduction/caching-introduction-page.html',
        controller : 'hibernateCachingIntroController'
    }).when('/hibernate_first_caching', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_caching/first_level_caching/first-level-caching-page.html',
        controller : 'hibernateFirstCachingController'
    }).when('/hibernate_second_caching', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_caching/second_level_caching/second-level-caching-page.html',
        controller : 'hibernateSecondCachingController'
    }).when('/hibernate_batch_processing', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_batch_processing/hibernate-batch-processing-page.html',
        controller : 'hibernateBatchProcessingController'
    }).when('/hibernate_integration', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_integration/integration-page.html',
        controller : 'hibernateIntegrationController'
    }).when('/hibernate_spring', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_integration/hibernate_with_spring/hibernate-with-spring-page.html',
        controller : 'hibernateSpringController'
    }).when('/hibernate_struts', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_integration/hibernate_with_struts/hibernate-with-struts-page.html',
        controller : 'hibernateStrutsController'
    }).when('/hibernate_spring_struts', {
        templateUrl : baseViewPackage + 'hibernate/hibernate_integration/struts_spring_hibernate/struts-spring-hibernate-page.html',
        controller : 'hibernateSpringStrutsController'
    }).when('/hibernate_quiz', {
        templateUrl : baseViewPackage + 'hibernate/quiz/quiz-page.html',
        controller : 'hibernateQuizController'
    }).when('/hibernate_references', {
        templateUrl : baseViewPackage + 'hibernate/references/references-page.html',
        controller : 'hibernateReferencesController'
    });
});