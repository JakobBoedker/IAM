import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'd4147b093f0e45d68a4a5d910d6517ed'
                    }
                    mover: {
                        table: 'sys_ws_operation'
                        id: 'bcf3ebb4d1764d3eb4d7c13d6a190d18'
                    }
                    offboarding: {
                        table: 'sys_ws_operation'
                        id: '6da2d067b61d4c1899dd55b9623e1376'
                    }
                    onboarding: {
                        table: 'sys_ws_operation'
                        id: '08715f8bebcf4bbb956ea6e932530e6e'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '10b0511a185c41e1b1adfad154139425'
                    }
                    rest_iam_endpoint: {
                        table: 'sys_ws_definition'
                        id: '7bfe0066422b4ece9327e6b322c4a74f'
                    }
                    rest_iam_endpoint_acl: {
                        table: 'sys_security_acl'
                        id: '3c056a5713c5487e9276f0078f607995'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '1e5a83d0ee0748cc9ae548225460dd75'
                    }
                    v1: {
                        table: 'sys_ws_version'
                        id: '4278bc7dfdf44bfe87d0ab006eb46787'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '00f4b9efbb27498f9c46c8a48cbcdcd6'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'previous_role'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0191bbd74c2e49a0bcdded0bcddc3001'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01c894bb6da145a48f1f819f25e2af6d'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0293885586824bf0b570d86af9deb8d1'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'external_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02a34bdfff2d46e4b073e59f22a1e1bf'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '042d665518f14bacaadec0edcc4167e2'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '04e3fd21cd6c4dc7a7c05b594106bfbc'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'ad_group_add'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05d6055d05a34673b444e841da0664cf'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0792f50233764aff89dce9a25582b205'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07bee1f2ead34b81acd3ca6c2d039593'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'approver_1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0939ce7206314ef1b906eb8a2e72943e'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '093a108355524929871e468b0883e035'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'entra_id_group_remove'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '09896912416043b2913966f1744f5166'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'status'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '09fa7f3177964f9c993bc3ad6e47a423'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a740c82e6e145909ae0271db9596ad0'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'executed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ab3f9cda3c14d13bb8ad31d442e77bc'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'sod_rule'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d5efa16be0b4e10b16d928f3c859e3a'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d5f435e58ce455d802c259050457668'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'entra_id_group_remove'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ed90becf1b44abdba208f64c3773480'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'approver_2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f413dfb9e37460398f17b83307f4a70'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'entra_id_group_add'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13571ac16214495b8b88159756b9c412'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'ad_group_add'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '141fbc9a39fb474284c06ab0d8538f1d'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14bef3ba02e14e57b80a5da9847888c6'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'standard_tasks'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '164ccb40eb5341c6ae149ae85175cde1'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '16c6da7f35c441cc9afc7a50ac32ef9f'
                        key: {
                            name: 'x_1311940_iam_log'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17a84212131544c481bf5ae0b0284a91'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'guid'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18c1feac4fa84acfb83f8b0d3017051b'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1a7210a424a340a9a7df102da1428ff4'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'area'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a887c72993b4b00b2e0a0b57cede15a'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'ad_group_remove'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1aa577b0841844a5ae2fcbd9f0276b21'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'last_sync'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1b7253a2752343be8b51e5c8198472e0'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'status'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c9b88b3f8a54670a861394c54ff3d87'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f84bc39a7ad4d4f8fc35e5a987fa2ce'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'ad_group_remove'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '223fa47172d245cc91c6f79dc62dfaaa'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23e55136122548b0b12779cd645064a3'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'groups_removed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2443d2553a2c4a008888d4b866a20d96'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'action'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '256fa23bf6854f11b76b66d559440b87'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'approver_2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25840614d5cc43d4bbf0f8af423aea0b'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'approver_2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2586661262d94f9ca6d53a77fa04c05e'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'role'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '28b3e1099c0f41dcb9493768a3074c57'
                        key: {
                            name: 'x_1311940_iam_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ad50160c36b46988939c5e22583d117'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'approver_2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2aecd79d37744b52b6543b03edfa2c0c'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'approver_2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d9b47a1a1e1492cb51143f9b11b3fb0'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'task_info'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d9ef737bf0a45c2a1007179c9444f2a'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'request_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e0ca015ac374f9ea0c3ead434e63ec9'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'entra_id_group_remove'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32088defc410411c816f0608140586fb'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'automation_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '321458d2b6d44043899996c038dc226e'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '352cfb148a584a91b2fef6612a59d09c'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '354b517b15f447e1b733665ca86198c4'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36532bc6496842879657c7cc0791e7ec'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'entra_id_group_add'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '390bdf3e752d4351b788fe4140b1f135'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'is_license_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c1338269b2c4ff18fe9da5cb739cdce'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d4674d776a14e85acdec262be16567a'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'groups'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3dc0fcb8615c4ccaa10063ca73ff500e'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3dc3bcf5ee174fa19e025dc99d6a62c4'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3fabab0205e2433e8660d7425eafe0c8'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '413203b3a322402bbb9886e6c1b77bd1'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42657de3a2ef45f8bd6f6931d28ea153'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43458d0d0af8479ba172cff22a70bce7'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'entra_id_group_add'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44015f6bd2664ce4996b3d81ff9f88b3'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'in_role'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '47f933c570c8422895fa9d5847138f52'
                        key: {
                            name: 'x_1311940_iam_log'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a838d52af2244508025ede9dc25b34c'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'groups_added'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ade833071854adf80f275b96e2410f8'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'action'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c8ba281163a469fae19571691f30949'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c9cbde4a5654c2c89fb3a5bbb4b7f0c'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d8d1136f7fc4b25944ae87d61acd748'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'entra_id_group_add'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ee2ad52a7364369b4e7040ce263dfb4'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5006200ea4294e9eab6f97939b36d4dc'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '504b856dd84b4b88bbcf53f654954b0f'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'status'
                            value: '5'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '512af60235874f93b4661d2eb9018864'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'source'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5365a73f3ac84b98b7a5eda708282b52'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'guid'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53b1c56c1b494cc69918a5c1c0ebaf09'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'license_group'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '543b174b25834c40ad80f73307071fde'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '546cff2c7c424f61a672dc6ba7f2af37'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '568817d2c5bd4ae1ab9f064f8283a5b2'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56cae62e04f446818cf25c2b5e76ce7f'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '58f3c44b6ec74c19842260e1451c829d'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'task_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c88476c601f4ef0b58c34346523d365'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62579fd8b75a4f84a1ed42e926ce054a'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62838a9270ba4391ab1fd49642635a57'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'task_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62e4c49488e64aa394dca4a08b5840e8'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62f9c1cf26c54cf48753ac57cdb2d5ee'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'entra_id_group_add'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63487c0800e846c7b0edd50c44d00d23'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6439f9778242425ab000d5cf0ad16b37'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'license_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '650d056bc0a54ab18d7705c7d4652f9f'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'groups_added'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6632275a0f9f4ad697eeb77ca9aee7c9'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '664bdcc4e5224ae18a65e3539d636dd8'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b13e590f542401d87b31981465bb662'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c9e754ee7a043c0a7507f0152bc382d'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6ce777acf72546f391151bebb24ed45f'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'action'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f8c94a4170e48a591280eb1358826fd'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6fb1d90355b24f08ab9d96c7f0fd3800'
                        key: {
                            name: 'sys_user'
                            element: 'x_1311940_iam_job_role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '705826f989b1470c920f8c161d800d41'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'approver_1'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '735287760a674ff383e4e9dd067733e1'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '743d8bff2d27475f99f57d945c437500'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'area'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '75c1ee52cbf44dc9a8fda3bedac3ada6'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77913e4b530643e1bab9a02a98d2afe1'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'entra_id_group_remove'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b67e009cf7f49b79782d20e5005e1d0'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'owner'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7de5c4cb93df486992133eb00875eac9'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'task_info'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7df4c239a7e24d44b00195d0a9d5f5c6'
                        key: {
                            name: 'sys_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e779ae0043e4451af86ac22a1581f88'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7f932b5b5cb04a1da0cf7ec108ccfc42'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'area'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8056194419fd42dfa3e2fd48c5abc291'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'groups'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8619319c49e645fdbf74f386bbdd36ff'
                        key: {
                            name: 'sys_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8642da87df634ada990ced78c0617b36'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '864c2932863549478a78d31ac8d3cc73'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '87a83a4c349743c69f47d355ddb8882c'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'status'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88e2e3c1067c46f1855e66b83910fccd'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'standard_tasks'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a6b4e35132b4a999b42655e3547e371'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b536f11bcc8450fb1acb97097f4feef'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'entra_id_group_add'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8c440808833248138b4f91985b0665bb'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'new_role'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c8c8ed01b864bfd8b6f6f18c460737e'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f972d1db4d643b5a9b2a610617ae284'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'status'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9107ee597573425ca812354cdff3d32d'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'ad_group_remove'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9367bb604a6d44e4b959f763c8fac7ec'
                        key: {
                            name: 'x_1311940_iam_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9450c9500cb04b5d8607f29b0b025a6a'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'action'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '957643c82334436e864019ae7f16ce1f'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'status'
                            value: '5'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '957a26a12049421394b097013cff92ce'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'external_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '95b5f1aa3171408f9752274a66dded11'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'area'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '962d2ce3b24a41a18e30f300590a332b'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97e41fe481c34926907644311486d604'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'request_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99d7cd1bfcbe4866bb7631655a704c07'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9de1d1a98a6a4792a17671e3db4c93d7'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a035c7aa527640b5b442a98b3de0adb6'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0673bb80ee945619e32dc2a7eb2ad3e'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'approver_1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a091887e659644fa9b1bece98384c0ca'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'entra_id_group_remove'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0ee26618da54d31baf024b36b1f7299'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'sod_rule'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a16ae746c6b44664a1acf6e7631cefa7'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'status'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a1f43421205b4248be958475a03237fd'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a2cefb7a4130488790cc56debd24dbb9'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'primary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3395d0d588f49ac8f5a2fa55d5d5547'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a45f85b6b4d64c13bc578724bc156d4b'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'automation_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6ec1e6c795844e181a2fa57894ed929'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8b339e570f2440db57e7d5e395007f9'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'executed_at'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a97b7c13227c4bc9a7ec34ce32366da2'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa19a326f4984da180c9e49032cb196e'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'entra_id_group_remove'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aa86af5b35bb4a92a6818592f4dfc27a'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'status'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab7f0eef6cbc4653b85c85f46f43ba38'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'approver_2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'abf177d2d4d849d8a331050ab3a2d6f6'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae1485c2e9eb4654828dbe6d9bc8af51'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'area'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'afc913ddb99c4eee8f93de2fd0a3bd1a'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'status'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b015303021bd4b58be44a140562d9710'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'previous_role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0b877b3c6c74e57b2b438d79de3f337'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'approver_1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2854988f45f4e4fa09f0ac07cb351a0'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'primary'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3ba4a5b4f4b47f9a042442a5e67b363'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4ff5d6eab0a4c229b742153600a8e13'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'status'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b69ed776572f42bea3f232f85768161e'
                        key: {
                            name: 'sys_user'
                            element: 'x_1311940_iam_job_role'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b6c0ee7acf774f03856e1c0a312eaebf'
                        key: {
                            name: 'x_1311940_iam_job_role'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8d2194a9d4f4a1db07a98946526c6e8'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'area'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ba262cf775a3432c84b689e08302ea6c'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'status'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb5e72ab34c74e84b866146aa7362564'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'ad_group_add'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'be38b34b55fd4e8fb5a129383979f7fb'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0762c38178b493ab6961ed4e45a1883'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c182bb03b51b478cbef09e31c5074155'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c41e1ace24b84e32940161518e4c9279'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4f8b548d1414f8986264799a71cbc6c'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6a462835dbd49bfad75cde11ecba97b'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6cbfcc750eb4f84a36d364823d340be'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c77b88d1f1b04aba81c59db5f7c394b0'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c78903778d29459aa477acd6ab01aa2f'
                        key: {
                            name: 'x_1311940_iam.IAM-Admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c8726b5f6bd54bcba7a2f4f92884c1b4'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca87fa32e0cd4764a9b5efb4b0304ff1'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'ad_group_add'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cabe61da2e1b4ca4a3e649c4036fd8a8'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb78a095e42248aab06ecb29e4d44016'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'internal_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cbc7e6f288bc4c599bd5e0abd46713bb'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cc826b2604ae4530a59b952d96312ec9'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0d96c07705a40d6ab0406e3b0664ea6'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2312371a4734a8e9593b5c8c90a5fdf'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2a2889e0a694feb83cc2739a1aaf31c'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'action'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2f4144ac37c4aa880823d8d1aca7d62'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'ad_group_remove'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd37f91dac09a4e6e8de20200a1ab4bff'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd77e53e6dbdd48b5b84a4a60ab2d5400'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8368ad2d2be4803a9a7453df7a15d43'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'status'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd90a80075d24499fb518c004f1bd32da'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'approver_1'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9305927a978415f905a524be49aa5d6'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc06c7b81c4744e2b0235f5ceb814fe9'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc88a9321440446a9635172e797eb7eb'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'new_role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'def6470ae19e407091afb35f222efb2e'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e051341fdeaa4caf8fa39a741fc00328'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'internal_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e20c10315d404ab48deef6e5d8a91c0a'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'ad_group_add'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e31a8557edee4c2ea631bba21dfde8e7'
                        key: {
                            name: 'x_1311940_iam_job_role'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3a5c49bfbf749129c8b78cb5420ad82'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e417d327a627471a85f915e9e69e1e41'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e68e71e75da74a13b7139f307daf8b3e'
                        key: {
                            name: 'x_1311940_iam_job_role'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7f065858f83498c801cc57b2766f0b0'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'approver_1'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8c401741f1f4e61833be63198f84479'
                        key: {
                            name: 'x_1311940_iam_access_duration'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8e9696bb3f54f4cbdeffabe6d846145'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e92e146f3231424b8a9c2092c29c5521'
                        key: {
                            name: 'sys_user'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ea43f45cfa7e4e0ab828049d6658fe2d'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'status'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ecb11a1b4a5542cfa36545cb7c43981d'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'is_license_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecb745c6289d4cb4a39f59526e662bb4'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecd61f928aba42809e95d37f728a0564'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eefc986995a74ee69f305c1c85d692a7'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'ad_group_remove'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef011bd23bc94555997de2d905a112dd'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'system'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0308268a4fb40fd8b359cff406fab69'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f119825c12eb42a29ffd35395fa14076'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'in_role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f18aa7af76ea44f09136d486faa58c9b'
                        key: {
                            name: 'x_1311940_iam_log'
                            element: 'groups_removed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f225a9dfcfde4df6b7e98b08b7ded45d'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f29b7f1180e4463caea90e135f528f22'
                        key: {
                            name: 'x_1311940_iam_group'
                            element: 'last_sync'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2f7985c91a746f1a1edf8ca7e71ece9'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'system'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f30e9ad42150495ba5bd8a5b12eb9458'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3639abd823446c38aa54c02b12ca91f'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f5262da9098447d6b07b3e5a86254941'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa4d52a9f435402bb2c513e58905c29e'
                        key: {
                            name: 'x_1311940_iam_automation_task'
                            element: 'status'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbf77838d67e4b6fa18c022c552ab2c0'
                        deleted: true
                        key: {
                            name: 'x_1311940_iam_task'
                            element: 'ad_group_remove'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc04a5e936a74f19ba441bfb60857af9'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'ad_group_add'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fddec6bbcdef4a2c90d7ed5b5960a8d7'
                        key: {
                            name: 'x_1311940_iam_standard_task'
                            element: 'area'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
