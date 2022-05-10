import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectProjects, listProjectsAsync } from './projectsSlice';

// ProjectList represents the list of projects in the application.
export function ProjectList() {
  const { projects, status } = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listProjectsAsync());
  }, [dispatch]);

  return (
    <div className="py-6 w-80">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Failed!</div>}
      {status === 'idle' && (
        <ul className="flex">
          {projects.map((project) => {
            const { id, name, publicKey, secretKey, createdAt } = project;
            return (
              <li
                key={id}
                className="p-6 mr-4 mb-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
              >
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 break-words">
                  {name}
                </h5>
                <p className="text-gray-700 text-sm">
                  {id}
                  <br />
                  {publicKey}
                  <br />
                  {secretKey}
                  <br />
                  {createdAt && new Date(createdAt).toString()}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}