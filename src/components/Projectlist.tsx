import { For, Match, Switch } from "solid-js";
import { formatDate, getYear } from "../utils/helpers";
import { projects, type Project } from "../config";

type Props = {
  project: Project;
};

const ShowDate = (date: string, onlyYear?: boolean) => {
  if (onlyYear) {
    return getYear(date);
  }
  return formatDate(date);
};

const ProjectPreviewCard = (props: Props) => {
  return (
    <div class="relative flex justify-between w-full max-w-7xl bg-center bg-cover rounded-xl bg-dark-500 border-solid border-2 border-dark-400 hover:border-red-500 overflow-hidden cursor-pointer hover:scale-105 hover:drop-shadow-2xl transition-all duration-200 ease-in-out hover:skew-y-1">
      <div class="z-0 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-dark-500 from-20% w-full h-full"></div>
      <div class="z-0 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-dark-500 from-30% w-full h-full"></div>
      <div class="z-0 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-l from-dark-500 w-full h-full"></div>
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 h-full w-full py-3 px-4 z-10">
        <div class="w-full">
          <div class="flex flex-col lg:flex-row w-full justify-between mb-4">
            <h2 class="text-white font-bold text-2xl m-0">
              {props.project.title}
            </h2>
            <div class="flex gap-2 items-center text-neutral-500">
              <time class="font-light text-sm m-0 flex items-center">
                {ShowDate(props.project.startDate, props.project.onlyYear)}
              </time>
              -
              <Switch>
                <Match when={props.project.endDate}>
                  <time class="font-light text-sm m-0 flex items-center">
                    {ShowDate(
                      props.project.endDate as string,
                      props.project.onlyYear
                    )}
                  </time>
                </Match>
                <Match when={!props.project.endDate}>
                  <time>Present</time>
                </Match>
              </Switch>
            </div>
          </div>
          <div>
            <span class="text-neutral-400 max-w-xl">
              {props.project.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projectlist = () => {
  return (
    <>
      <For each={projects}>{(project) => <ProjectPreviewCard project={project} />}</For>
    </>
  );
};

export default Projectlist;
